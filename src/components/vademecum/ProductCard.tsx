import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProductMaster } from "@/types/product";
import { StatusBadge } from "./StatusBadge";

interface ProductCardProps {
  product: ProductMaster;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-border bg-brand-surface p-5 shadow-sm transition-all duration-200 hover:border-brand-green/60 hover:shadow-md hover:shadow-brand-green/10">
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-sage text-brand-emerald border border-brand-border font-outfit">
              <Sparkles className="w-2.5 h-2.5 text-brand-green" />
              <span>Producto Ancla</span>
            </span>
            <StatusBadge status={product.status} />
          </div>
          <span className="text-[11px] font-semibold text-brand-forest bg-brand-sage px-2.5 py-0.5 rounded-lg border border-brand-border">
            {product.presentation}
          </span>
        </div>

        <h3 className="text-lg font-bold text-brand-text-main font-outfit group-hover:text-brand-green transition-colors">
          {product.name}
        </h3>

        <p className="mt-2 text-xs text-brand-text-muted leading-relaxed line-clamp-3">
          {product.functionalDescription}
        </p>

        {/* Functional Area Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.functionalAreas.map((area, i) => (
            <span
              key={i}
              className="text-[10px] bg-brand-sage/60 text-brand-emerald px-2 py-0.5 rounded-md border border-brand-border font-medium"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-3.5 border-t border-brand-border flex items-center justify-between">
        <span className="text-[10px] text-brand-text-muted font-medium">
          Actualizado: {product.updatedAt}
        </span>
        <Link
          href={`/pro/vademecum/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:text-brand-forest transition-colors font-outfit"
        >
          <span>Ficha Técnica</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
