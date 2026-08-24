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
      aria-label="Navegación móvil inferior"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-brand-surface/95 backdrop-blur-lg border-t border-brand-border shadow-[0_-4px_20px_rgba(13,34,28,0.06)]"
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
              className={`relative flex flex-col items-center justify-center min-h-[48px] py-1 transition-all rounded-xl ${
                isActive
                  ? "text-brand-green font-bold scale-[1.02]"
                  : "text-brand-text-muted hover:text-brand-text-main"
              }`}
            >
              {isActive && (
                <span className="absolute top-0.5 w-7 h-1 bg-brand-green rounded-full shadow-[0_1px_6px_rgba(22,128,87,0.4)] animate-in fade-in" />
              )}
              <div className="relative">
                <Icon
                  className={`w-5 h-5 mb-0.5 transition-transform ${
                    isActive ? "text-brand-green scale-110" : "text-brand-text-muted"
                  }`}
                />
                {item.badge && (
                  <span className="absolute -top-1.5 -right-3 text-[9px] bg-brand-gold text-white font-bold px-1 rounded-full leading-tight shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] leading-tight tracking-tight font-outfit">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
