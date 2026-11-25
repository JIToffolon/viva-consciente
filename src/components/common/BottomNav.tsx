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
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-brand-surface/90 dark:bg-dark-surface/90 backdrop-blur-md border-t border-brand-border dark:border-dark-border transition-colors"
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
              className={`relative flex flex-col items-center justify-center min-h-[48px] py-1 transition-colors rounded-lg ${
                isActive
                  ? "text-brand-teal dark:text-teal-400 font-semibold"
                  : "text-brand-text-muted dark:text-dark-text-muted hover:text-brand-text-main dark:hover:text-dark-text-main"
              }`}
            >
              {isActive && (
                <span className="absolute top-0 w-8 h-0.5 bg-brand-teal dark:bg-teal-400 rounded-full" />
              )}
              <div className="relative">
                <Icon
                  className={`w-5 h-5 mb-0.5 ${
                    isActive ? "text-brand-teal dark:text-teal-400" : "text-brand-text-muted dark:text-dark-text-muted"
                  }`}
                />
                {item.badge && (
                  <span className="absolute -top-1.5 -right-3 text-[10px] bg-brand-gold text-white font-bold px-1 rounded leading-tight">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs leading-tight tracking-tight font-outfit">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
