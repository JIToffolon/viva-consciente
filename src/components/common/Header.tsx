import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-brand-surface/90 backdrop-blur-md border-b border-slate-100 px-4 py-3">
      <div className="flex items-center justify-between">
        <Link href="/app" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            VC
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-brand-text-main tracking-tight group-hover:text-brand-teal transition-colors">
              Viva Consciente
            </span>
            <span className="text-[10px] text-brand-text-muted uppercase tracking-wider -mt-0.5">
              Salud Celular & Biológica
            </span>
          </div>
        </Link>
        <Link
          href="/pro"
          className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-brand-gold/30 rounded-full text-brand-gold text-[11px] font-semibold hover:bg-amber-100 transition-colors"
        >
          <Sparkles className="w-3 h-3" />
          <span>Área PRO</span>
        </Link>
      </div>
    </header>
  );
}
