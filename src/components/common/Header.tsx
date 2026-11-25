import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-brand-surface/90 dark:bg-dark-surface/90 backdrop-blur-md border-b border-brand-border dark:border-dark-border px-4 py-3 md:px-6 transition-colors">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <Link href="/app" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-brand-forest dark:bg-brand-teal flex items-center justify-center text-white font-bold text-sm">
            VC
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-brand-text-main dark:text-dark-text-main tracking-tight font-outfit group-hover:text-brand-teal dark:group-hover:text-teal-300 transition-colors">
              Viva Consciente
            </span>
            <span className="text-xs text-brand-text-muted dark:text-dark-text-muted font-medium leading-none">
              Salud Celular & Biológica
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/pro"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-sage dark:bg-dark-surface-tint border border-brand-border dark:border-dark-border rounded-lg text-brand-teal dark:text-teal-300 text-xs font-semibold hover:border-brand-teal/50 transition-colors font-outfit"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Área PRO</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
