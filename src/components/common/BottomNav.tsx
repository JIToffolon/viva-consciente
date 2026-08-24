"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Leaf, ShieldCheck, MessageCircle } from "lucide-react";
import { BOTTOM_NAV_ITEMS } from "@/data/navigation";

const iconMap = {
  home: Home,
  leaf: Leaf,
  shieldCheck: ShieldCheck,
  messageSquare: MessageCircle,
  grid: Leaf,
};

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-brand-surface/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]"
    >
      <div className="max-w-md mx-auto h-full px-2 grid grid-cols-4 items-center">
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
              className={`relative flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors rounded-lg ${
                isActive
                  ? "text-brand-teal font-semibold"
                  : "text-brand-text-muted hover:text-brand-text-main"
              }`}
            >
              {isActive && (
                <span className="absolute top-0.5 w-8 h-0.5 bg-brand-teal rounded-full animate-in fade-in" />
              )}
              <div className="relative">
                <Icon className={`w-5 h-5 mb-0.5 transition-transform ${isActive ? "scale-110" : ""}`} />
                {item.badge && (
                  <span className="absolute -top-1.5 -right-3 text-[9px] bg-brand-gold text-white font-bold px-1 rounded-full leading-tight">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] leading-tight tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
