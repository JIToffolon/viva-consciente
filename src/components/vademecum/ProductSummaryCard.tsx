import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { ProductMaster } from "@/types/product";
import { StatusBadge } from "./StatusBadge";

interface ProductSummaryCardProps {
  product: ProductMaster;
  whatsappNumber?: string;
}

export function ProductSummaryCard({
  product,
  whatsappNumber = "5491100000000",
}: ProductSummaryCardProps) {
  const requestMessage = `Hola Viva Consciente, deseo solicitar la ficha técnica y composición oficial del producto ${product.name}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(requestMessage)}`;

  return (
    <div className="flex flex-col justify-between rounded-xl border border-brand-border dark:border-dark-border bg-brand-surface dark:bg-dark-surface p-4 shadow-sm transition-colors hover:border-brand-teal/50 dark:hover:border-teal-500/50">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <span className="text-xs font-semibold text-brand-teal dark:text-teal-400 uppercase tracking-wider font-outfit">
            {product.family.replace(/_/g, " ")}
          </span>
          <StatusBadge status={product.status} />
        </div>

        <h4 className="text-base font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
          {product.name}
        </h4>

        <div className="mt-1 text-xs font-semibold text-brand-green dark:text-emerald-400">
          Presentación: {product.presentation}
        </div>

        <p className="mt-2 text-sm text-brand-text-muted dark:text-dark-text-muted leading-relaxed line-clamp-2">
          {product.functionalDescription}
        </p>

        {product.functionalAreas && product.functionalAreas.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.functionalAreas.map((area, idx) => (
              <span
                key={idx}
                className="text-xs bg-brand-surface-tint dark:bg-dark-surface-tint text-brand-text-main dark:text-dark-text-main px-2 py-0.5 rounded-md border border-brand-border dark:border-dark-border font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-brand-border dark:border-dark-border">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-brand-sage dark:bg-dark-surface-tint hover:bg-emerald-100/80 dark:hover:bg-dark-border text-brand-forest dark:text-emerald-200 text-xs font-semibold rounded-lg transition-colors border border-brand-border dark:border-dark-border font-outfit"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Solicitar Ficha Técnica</span>
        </a>
      </div>
    </div>
  );
}
