import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProductMaster } from "@/types/product";
import { StatusBadge } from "./StatusBadge";

interface ProductCardProps {
  product: ProductMaster;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-brand-surface p-5 shadow-sm transition-all hover:border-brand-teal/40 hover:shadow-md">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-brand-teal border border-teal-100">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Producto Ancla</span>
            </span>
            <StatusBadge status={product.status} />
          </div>
          <span className="text-[11px] font-medium text-brand-text-muted bg-slate-100 px-2 py-0.5 rounded-md">
            {product.presentation}
          </span>
        </div>

        <h3 className="text-lg font-bold text-brand-text-main group-hover:text-brand-teal transition-colors">
          {product.name}
        </h3>

        <p className="mt-1.5 text-xs text-brand-text-muted leading-relaxed line-clamp-3">
          {product.functionalDescription}
        </p>

        {/* Functional Area Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.functionalAreas.map((area, i) => (
            <span
              key={i}
              className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded-md border border-slate-100 font-medium"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[10px] text-brand-text-muted">
          Actualizado: {product.updatedAt}
        </span>
        <Link
          href={`/pro/vademecum/${product.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-teal hover:text-teal-800 transition-colors"
        >
          <span>Ficha Técnica</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
