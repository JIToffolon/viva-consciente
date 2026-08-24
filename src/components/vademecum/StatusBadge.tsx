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
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 ${className}`}
        >
          <CheckCircle2 className="w-3 h-3" />
          <span>Publicado</span>
        </span>
      );
    case "VALIDAR":
      return (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-300 ${className}`}
        >
          <AlertTriangle className="w-3 h-3" />
          <span>En Validación</span>
        </span>
      );
    case "BLOQUEADO":
      return (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-rose-50 text-rose-700 border border-rose-200 ${className}`}
        >
          <ShieldAlert className="w-3 h-3" />
          <span>Borrador Técnico</span>
        </span>
      );
    default:
      return null;
  }
}
