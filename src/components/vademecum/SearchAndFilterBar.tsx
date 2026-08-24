"use client";

import { Search, X, Filter, Sparkles } from "lucide-react";
import { ProductFamily } from "@/types/product";

interface SearchAndFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedFamily: ProductFamily | "ALL";
  onFamilyChange: (family: ProductFamily | "ALL") => void;
  selectedArea: string | "ALL";
  onAreaChange: (area: string | "ALL") => void;
  availableAreas: string[];
}

const FAMILIES: { key: ProductFamily | "ALL"; label: string }[] = [
  { key: "ALL", label: "Todas las Fórmulas" },
  { key: "ADAPTOGENOS", label: "Adaptógenos & Hongos" },
  { key: "LONGEVIDAD", label: "Longevidad Celular" },
  { key: "MICRONUTRICION_AVANZADA", label: "Micronutrición" },
  { key: "ORIGINALES", label: "Línea Original" },
  { key: "HONGOS_FUNCIONALES", label: "Micología Simple" },
  { key: "EXTRACTOS_LIQUIDOS", label: "Extractos Líquidos" },
];

export function SearchAndFilterBar({
  searchQuery,
  onSearchChange,
  selectedFamily,
  onFamilyChange,
  selectedArea,
  onAreaChange,
  availableAreas,
}: SearchAndFilterBarProps) {
  return (
    <div className="space-y-3.5 bg-brand-surface dark:bg-dark-surface p-4 md:p-5 rounded-3xl border border-brand-border dark:border-dark-border shadow-sm transition-colors">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-green dark:text-emerald-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar por fórmula, principio activo, adaptógeno..."
          className="w-full pl-10 pr-9 py-2.5 bg-brand-sage/40 dark:bg-dark-surface-tint border border-brand-border dark:border-dark-border rounded-xl text-xs text-brand-text-main dark:text-dark-text-main placeholder-brand-text-muted/80 dark:placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white dark:focus:bg-dark-surface transition-all font-medium"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-text-muted dark:text-dark-text-muted hover:text-brand-forest dark:hover:text-emerald-300 p-1 rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Family Pills Carousel */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-brand-emerald dark:text-emerald-400 uppercase tracking-wider font-outfit">
          <Filter className="w-3.5 h-3.5 text-brand-green dark:text-emerald-400" />
          <span>Línea / Familia:</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {FAMILIES.map((f) => (
            <button
              key={f.key}
              onClick={() => onFamilyChange(f.key)}
              className={`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all font-outfit ${
                selectedFamily === f.key
                  ? "bg-brand-emerald dark:bg-brand-green text-white font-bold shadow-sm shadow-brand-emerald/20 scale-[1.02]"
                  : "bg-brand-sage dark:bg-dark-surface-tint text-brand-forest dark:text-dark-text-muted hover:bg-emerald-100/70 dark:hover:bg-emerald-950 font-medium"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Functional Area Chips */}
      {availableAreas.length > 0 && (
        <div className="space-y-2 pt-2 border-t border-brand-border dark:border-dark-border">
          <div className="flex items-center justify-between text-[11px] font-bold text-brand-emerald dark:text-emerald-400 uppercase tracking-wider font-outfit">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-green dark:text-emerald-400" />
              <span>Áreas Funcionales:</span>
            </span>
            {selectedArea !== "ALL" && (
              <button
                onClick={() => onAreaChange("ALL")}
                className="text-brand-green dark:text-emerald-300 hover:underline text-[10px] font-semibold"
              >
                Limpiar filtro
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {availableAreas.slice(0, 10).map((area) => (
              <button
                key={area}
                onClick={() => onAreaChange(selectedArea === area ? "ALL" : area)}
                className={`px-2.5 py-1 rounded-lg text-[11px] transition-all font-medium ${
                  selectedArea === area
                    ? "bg-brand-green dark:bg-emerald-600 text-white font-semibold shadow-xs"
                    : "bg-brand-sage/70 dark:bg-dark-surface-tint text-brand-forest dark:text-dark-text-muted hover:bg-emerald-100/60 dark:hover:bg-emerald-950 border border-brand-border/60 dark:border-dark-border"
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
