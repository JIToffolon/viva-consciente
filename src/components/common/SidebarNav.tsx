"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Leaf,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  BookOpen,
  Microscope,
  Compass,
} from "lucide-react";
import { BOTTOM_NAV_ITEMS } from "@/data/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { WhatsAppIcon } from "./WhatsAppIcon";

const iconMap = {
  home: Home,
  leaf: Leaf,
  shieldCheck: ShieldCheck,
  messageSquare: MessageCircle,
  grid: Leaf,
};

const EXTRA_DESKTOP_LINKS = [
  { label: "Investigación I+D", href: "/app/investigacion", icon: Microscope },
  { label: "Longevidad Celular", href: "/app/longevidad", icon: Compass },
  { label: "Eje Intestino-Cerebro", href: "/app/eje-intestino-cerebro", icon: Sparkles },
  { label: "Vademécum Completo", href: "/pro/vademecum", icon: BookOpen },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col justify-between w-72 h-screen sticky top-0 bg-brand-surface/95 dark:bg-dark-surface/95 backdrop-blur-lg border-r border-brand-border dark:border-dark-border p-6 z-40 shrink-0 transition-colors">
      {/* Brand Header & Navigation */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/app" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-emerald to-brand-green flex items-center justify-center text-white font-extrabold text-lg shadow-[0_4px_14px_rgba(22,128,87,0.35)] group-hover:scale-105 transition-transform">
              VC
            </div>
            <div>
              <div className="font-extrabold text-brand-text-main dark:text-dark-text-main text-lg tracking-tight font-outfit leading-tight">
                Viva Consciente
              </div>
              <div className="text-[11px] font-semibold text-brand-green dark:text-emerald-400 tracking-wider uppercase">
                Salud Celular & Biológica
              </div>
            </div>
          </Link>
        </div>

        {/* Primary Navigation */}
        <div className="space-y-1.5">
          <div className="text-xs font-bold text-brand-text-muted dark:text-dark-text-muted uppercase tracking-wider px-3 mb-2 font-outfit">
            Navegación Principal
          </div>
          {BOTTOM_NAV_ITEMS.map((item) => {
            const Icon = iconMap[item.iconName] || Home;
            const isActive =
              item.href === "/app"
                ? pathname === "/app"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm transition-all ${
                  isActive
                    ? "bg-brand-emerald dark:bg-brand-green text-white font-bold shadow-sm shadow-brand-emerald/20"
                    : "text-brand-text-muted dark:text-dark-text-muted hover:bg-brand-sage dark:hover:bg-dark-surface-tint hover:text-brand-text-main dark:hover:text-dark-text-main font-medium"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-brand-green dark:text-emerald-400"}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      isActive
                        ? "bg-amber-400 text-slate-900"
                        : "bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Direct Sub-modules */}
        <div className="space-y-1.5 pt-4 border-t border-brand-border dark:border-dark-border">
          <div className="text-xs font-bold text-brand-text-muted dark:text-dark-text-muted uppercase tracking-wider px-3 mb-2 font-outfit">
            Módulos Específicos
          </div>
          {EXTRA_DESKTOP_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3.5 px-4 py-2.5 rounded-2xl text-xs transition-colors ${
                  isActive
                    ? "bg-brand-sage dark:bg-dark-surface-tint text-brand-emerald dark:text-emerald-300 font-bold"
                    : "text-brand-text-muted dark:text-dark-text-muted hover:bg-slate-100 dark:hover:bg-dark-surface-tint hover:text-brand-text-main dark:hover:text-dark-text-main font-medium"
                }`}
              >
                <Icon className="w-4 h-4 text-brand-green/80 dark:text-emerald-400/80" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Sidebar Footer: Theme Toggle & WhatsApp CTA */}
      <div className="space-y-4 pt-4 border-t border-brand-border dark:border-dark-border">
        <div className="flex items-center justify-between px-2">
          <span className="text-xs font-bold text-brand-text-muted dark:text-dark-text-muted font-outfit">
            Tema Visual
          </span>
          <ThemeToggle showLabel />
        </div>

        <div className="bg-gradient-to-br from-brand-forest to-brand-emerald dark:from-[#051E18] dark:to-[#0A3D2F] rounded-3xl p-4.5 text-white shadow-md space-y-2.5 border border-emerald-800/30">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 font-outfit">
            <Sparkles className="w-4 h-4" />
            <span>Canal Oficial WhatsApp</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            Consultas clínicas y fichas técnicas directas.
          </p>
          <a
            href="https://wa.me/5491100000000?text=Hola%20Viva%20Consciente%2C%20contacto%20desde%20portal%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-2xl transition-all shadow-sm font-outfit group"
          >
            <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Abrir WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
