import { MessageCircle } from "lucide-react";
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
    <div className="flex flex-col justify-between rounded-2xl border border-brand-border bg-brand-surface p-4 shadow-2xs transition-all hover:border-brand-green/40 hover:shadow-sm">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-[10px] font-bold text-brand-emerald uppercase tracking-wider font-outfit">
            {product.family.replace(/_/g, " ")}
          </span>
          <StatusBadge status={product.status} />
        </div>

        <h4 className="text-sm font-bold text-brand-text-main font-outfit">{product.name}</h4>

        <div className="mt-0.5 text-[11px] font-semibold text-brand-green">
          Presentación: {product.presentation}
        </div>

        <p className="mt-1.5 text-xs text-brand-text-muted leading-relaxed line-clamp-2">
          {product.functionalDescription}
        </p>

        {product.functionalAreas && product.functionalAreas.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1">
            {product.functionalAreas.map((area, idx) => (
              <span
                key={idx}
                className="text-[9px] bg-brand-sage/60 text-brand-emerald px-1.5 py-0.5 rounded border border-brand-border font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-3.5 pt-3 border-t border-brand-border">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-brand-sage hover:bg-brand-emerald hover:text-white text-brand-emerald text-xs font-bold rounded-xl transition-all border border-brand-border font-outfit shadow-2xs"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Solicitar Ficha Técnica</span>
        </a>
      </div>
    </div>
  );
}
