"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Leaf,
  ShieldCheck,
  MessageCircle,
  Brain,
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
  { label: "Eje Intestino-Cerebro", href: "/app/eje-intestino-cerebro", icon: Brain },
  { label: "Vademécum Completo", href: "/pro/vademecum", icon: BookOpen },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col justify-between w-72 h-screen sticky top-0 bg-brand-surface dark:bg-dark-surface border-r border-brand-border dark:border-dark-border p-6 z-40 shrink-0 transition-colors">
      {/* Brand Header & Navigation */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/app" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-brand-forest dark:bg-brand-teal flex items-center justify-center text-white font-bold text-base">
              VC
            </div>
            <div>
              <div className="font-bold text-brand-text-main dark:text-dark-text-main text-base tracking-tight font-outfit leading-tight">
                Viva Consciente
              </div>
              <div className="text-xs font-medium text-brand-text-muted dark:text-dark-text-muted">
                Salud Celular & Biológica
              </div>
            </div>
          </Link>
        </div>

        {/* Primary Navigation */}
        <div className="space-y-1">
          <div className="text-xs font-semibold text-brand-text-muted dark:text-dark-text-muted uppercase tracking-wider px-3 mb-2 font-outfit">
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
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-brand-teal text-white font-semibold"
                    : "text-brand-text-muted dark:text-dark-text-muted hover:bg-brand-sage dark:hover:bg-dark-surface-tint hover:text-brand-text-main dark:hover:text-dark-text-main font-medium"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4.5 h-4.5 ${isActive ? "text-white" : "text-brand-teal dark:text-teal-400"}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300"
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
        <div className="space-y-1 pt-4 border-t border-brand-border dark:border-dark-border">
          <div className="text-xs font-semibold text-brand-text-muted dark:text-dark-text-muted uppercase tracking-wider px-3 mb-2 font-outfit">
            Módulos Específicos
          </div>
          {EXTRA_DESKTOP_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3.5 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-300 font-semibold"
                    : "text-brand-text-muted dark:text-dark-text-muted hover:bg-brand-surface-tint dark:hover:bg-dark-surface-tint hover:text-brand-text-main dark:hover:text-dark-text-main font-medium"
                }`}
              >
                <Icon className="w-4 h-4 text-brand-green dark:text-emerald-400" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Sidebar Footer: Theme Toggle & WhatsApp CTA */}
      <div className="space-y-4 pt-4 border-t border-brand-border dark:border-dark-border">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-semibold text-brand-text-muted dark:text-dark-text-muted font-outfit">
            Tema Visual
          </span>
          <ThemeToggle showLabel />
        </div>

        <div className="bg-brand-forest dark:bg-[#051B16] rounded-xl p-4 text-white space-y-2.5 border border-emerald-900/50">
          <div className="text-xs font-semibold text-emerald-200 uppercase tracking-wider font-outfit">
            Canal Oficial WhatsApp
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            Consultas clínicas y fichas técnicas directas.
          </p>
          <a
            href="https://wa.me/5491100000000?text=Hola%20Viva%20Consciente%2C%20contacto%20desde%20portal%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-lg transition-colors font-outfit"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Abrir WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
