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
  ArrowRight,
  Phone,
} from "lucide-react";
import { BOTTOM_NAV_ITEMS } from "@/data/navigation";

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
    <aside className="hidden md:flex flex-col justify-between w-64 h-screen sticky top-0 bg-brand-surface/95 backdrop-blur-lg border-r border-brand-border p-5 z-40 shrink-0">
      {/* Brand Header */}
      <div className="space-y-6">
        <Link href="/app" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-emerald to-brand-green flex items-center justify-center text-white font-bold text-base shadow-[0_4px_12px_rgba(22,128,87,0.3)] group-hover:scale-105 transition-transform">
            VC
          </div>
          <div>
            <div className="font-extrabold text-brand-text-main text-base tracking-tight font-outfit">
              Viva Consciente
            </div>
            <div className="text-[10px] font-semibold text-brand-green tracking-wider uppercase">
              Salud Celular & Biológica
            </div>
          </div>
        </Link>

        {/* Primary Navigation */}
        <div className="space-y-1">
          <div className="text-[11px] font-bold text-brand-text-muted uppercase tracking-wider px-3 mb-2">
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
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-brand-emerald text-white font-semibold shadow-sm shadow-brand-emerald/20"
                    : "text-brand-text-muted hover:bg-brand-sage hover:text-brand-text-main"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-brand-green"}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      isActive
                        ? "bg-amber-400 text-slate-900"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Explore Ecosistema Direct Links */}
        <div className="space-y-1 pt-3 border-t border-brand-border">
          <div className="text-[11px] font-bold text-brand-text-muted uppercase tracking-wider px-3 mb-2">
            Módulos Específicos
          </div>
          {EXTRA_DESKTOP_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs transition-colors ${
                  isActive
                    ? "bg-brand-sage text-brand-emerald font-semibold"
                    : "text-brand-text-muted hover:bg-slate-100 hover:text-brand-text-main"
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-brand-green/80" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Sidebar Footer Callout */}
      <div className="bg-gradient-to-br from-brand-forest to-brand-emerald rounded-2xl p-4 text-white shadow-md space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atención Directa PRO</span>
        </div>
        <p className="text-[11px] text-slate-200 leading-relaxed">
          Acceso rápido a consultas clínicas y fichas técnicas por WhatsApp oficial.
        </p>
        <a
          href="https://wa.me/5491100000000?text=Hola%20Viva%20Consciente%2C%20contacto%20desde%20portal%20web"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>Abrir WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
