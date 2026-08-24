import { ProductStatus } from "@/types/product";
import { CheckCircle2, AlertTriangle, ShieldAlert } from "lucide-react";

interface StatusBadgeProps {
  status: ProductStatus;
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  switch (status) {
    case "PUBLICADO":
      return (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 ${className}`}
        >
          <CheckCircle2 className="w-3 h-3" />
          <span>Publicado</span>
        </span>
      );
    case "VALIDAR":
      return (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-50 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700 ${className}`}
        >
          <AlertTriangle className="w-3 h-3" />
          <span>En Validación</span>
        </span>
      );
    case "BLOQUEADO":
      return (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 ${className}`}
        >
          <ShieldAlert className="w-3 h-3" />
          <span>Borrador Técnico</span>
        </span>
      );
    default:
      return null;
  }
}
