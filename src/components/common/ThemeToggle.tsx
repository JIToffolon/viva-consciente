"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl bg-brand-sage/60 dark:bg-slate-800 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className={`relative inline-flex items-center gap-2 p-2 rounded-xl border border-brand-border dark:border-emerald-800/40 bg-brand-surface dark:bg-emerald-950/60 text-brand-forest dark:text-emerald-300 hover:bg-brand-sage dark:hover:bg-emerald-900/60 transition-all shadow-2xs ${className}`}
    >
      <div className="relative w-4.5 h-4.5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4.5 h-4.5 text-amber-400 animate-in spin-in-45 duration-200" />
        ) : (
          <Moon className="w-4.5 h-4.5 text-emerald-800 animate-in spin-in-45 duration-200" />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-semibold font-outfit">
          {isDark ? "Modo Claro" : "Modo Oscuro"}
        </span>
      )}
    </button>
  );
}
