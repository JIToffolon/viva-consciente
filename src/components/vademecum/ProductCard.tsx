import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ProductMaster } from "@/types/product";
import { StatusBadge } from "./StatusBadge";

interface ProductCardProps {
  product: ProductMaster;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-xl border border-brand-border dark:border-dark-border bg-brand-surface dark:bg-dark-surface p-5 shadow-sm transition-colors hover:border-brand-teal/60 dark:hover:border-teal-500/60">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-outfit">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold dark:text-amber-400" />
              <span>Fórmula Ancla</span>
            </span>
            <StatusBadge status={product.status} />
          </div>
          <span className="text-xs font-semibold text-brand-text-main dark:text-dark-text-main bg-brand-sage dark:bg-dark-surface-tint px-2.5 py-0.5 rounded-md border border-brand-border dark:border-dark-border font-outfit">
            {product.presentation}
          </span>
        </div>

        <h3 className="text-lg font-bold text-brand-text-main dark:text-dark-text-main font-outfit group-hover:text-brand-teal dark:group-hover:text-teal-300 transition-colors">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-brand-text-muted dark:text-dark-text-muted leading-relaxed line-clamp-3">
          {product.functionalDescription}
        </p>

        {/* Functional Area Tags */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {product.functionalAreas.map((area, i) => (
            <span
              key={i}
              className="text-xs bg-brand-surface-tint dark:bg-dark-surface-tint text-brand-text-main dark:text-dark-text-main px-2.5 py-0.5 rounded-md border border-brand-border dark:border-dark-border font-medium"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-3.5 border-t border-brand-border dark:border-dark-border flex items-center justify-between gap-2">
        <span className="text-xs text-brand-text-muted dark:text-dark-text-muted font-medium">
          Act. {product.updatedAt}
        </span>
        <Link
          href={`/pro/vademecum/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal dark:text-teal-400 hover:underline font-outfit"
        >
          <span>Ver Ficha Técnica</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
