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
    <div className="flex flex-col justify-between rounded-2xl border border-brand-border dark:border-dark-border bg-brand-surface dark:bg-dark-surface p-4 shadow-2xs transition-all hover:border-brand-green/40 dark:hover:border-emerald-500/40 hover:shadow-sm">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-[10px] font-bold text-brand-emerald dark:text-emerald-300 uppercase tracking-wider font-outfit">
            {product.family.replace(/_/g, " ")}
          </span>
          <StatusBadge status={product.status} />
        </div>

        <h4 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">{product.name}</h4>

        <div className="mt-0.5 text-[11px] font-semibold text-brand-green dark:text-emerald-400">
          Presentación: {product.presentation}
        </div>

        <p className="mt-1.5 text-xs text-brand-text-muted dark:text-dark-text-muted leading-relaxed line-clamp-2">
          {product.functionalDescription}
        </p>

        {product.functionalAreas && product.functionalAreas.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1">
            {product.functionalAreas.map((area, idx) => (
              <span
                key={idx}
                className="text-[9px] bg-brand-sage/60 dark:bg-dark-surface-tint text-brand-emerald dark:text-emerald-300 px-1.5 py-0.5 rounded border border-brand-border dark:border-dark-border font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-3.5 pt-3 border-t border-brand-border dark:border-dark-border">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-brand-sage dark:bg-dark-surface-tint hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-brand-forest dark:text-emerald-200 text-xs font-bold rounded-xl transition-all border border-brand-border dark:border-dark-border font-outfit shadow-2xs group"
        >
          <WhatsAppIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>Solicitar Ficha Técnica</span>
        </a>
      </div>
    </div>
  );
}
