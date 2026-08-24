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
    <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-brand-surface p-4 shadow-sm transition-all hover:border-slate-300">
      <div>
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <span className="text-[10px] font-semibold text-brand-text-muted uppercase tracking-wider">
            {product.family.replace(/_/g, " ")}
          </span>
          <StatusBadge status={product.status} />
        </div>

        <h4 className="text-sm font-bold text-brand-text-main">{product.name}</h4>

        <div className="mt-0.5 text-[11px] font-medium text-brand-teal">
          Presentación: {product.presentation}
        </div>

        <p className="mt-1.5 text-xs text-brand-text-muted leading-relaxed line-clamp-2">
          {product.functionalDescription}
        </p>

        {product.functionalAreas && product.functionalAreas.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {product.functionalAreas.map((area, idx) => (
              <span
                key={idx}
                className="text-[9px] bg-slate-50 text-slate-500 px-1.5 py-0.5 rounded border border-slate-100"
              >
                {area}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-3 pt-2.5 border-t border-slate-100">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-brand-text-main text-xs font-semibold rounded-lg transition-colors border border-slate-200"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Solicitar Ficha Técnica</span>
        </a>
      </div>
    </div>
  );
}
