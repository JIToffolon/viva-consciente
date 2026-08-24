import Link from "next/link";
import { Sparkles, ArrowRight, Shield } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-brand-surface/90 backdrop-blur-md border-b border-brand-border px-4 py-3 md:px-6">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <Link href="/app" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-emerald to-brand-green flex items-center justify-center text-white font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform">
            VC
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold text-brand-text-main tracking-tight font-outfit group-hover:text-brand-green transition-colors">
              Viva Consciente
            </span>
            <span className="text-[10px] text-brand-text-muted font-medium uppercase tracking-wider -mt-0.5">
              Ecosistema de Salud Celular
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/pro"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-sage border border-brand-border rounded-full text-brand-emerald text-xs font-bold hover:bg-emerald-100/70 transition-all shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>Área PRO</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
