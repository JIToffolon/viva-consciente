"use client";

import { Search, X, Filter } from "lucide-react";
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
  { key: "ALL", label: "Todas" },
  { key: "ADAPTOGENOS", label: "Adaptógenos" },
  { key: "LONGEVIDAD", label: "Longevidad" },
  { key: "MICRONUTRICION_AVANZADA", label: "Micronutrición" },
  { key: "ORIGINALES", label: "Originales" },
  { key: "HONGOS_FUNCIONALES", label: "Hongos" },
  { key: "EXTRACTOS_LIQUIDOS", label: "Extractos" },
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
    <div className="space-y-3 bg-brand-surface p-4 rounded-2xl border border-slate-200 shadow-sm">
      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-muted" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar por producto, ingrediente o beneficio..."
          className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-brand-text-main placeholder-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-text-muted hover:text-brand-text-main p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Family Pills Carousel */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-text-muted">
          <Filter className="w-3 h-3" />
          <span>Familias de Producto:</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {FAMILIES.map((f) => (
            <button
              key={f.key}
              onClick={() => onFamilyChange(f.key)}
              className={`px-2.5 py-1 rounded-lg text-xs whitespace-nowrap transition-colors ${
                selectedFamily === f.key
                  ? "bg-brand-teal text-white font-semibold shadow-sm"
                  : "bg-slate-100 text-brand-text-muted hover:bg-slate-200 hover:text-brand-text-main"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Functional Area Pills */}
      {availableAreas.length > 0 && (
        <div className="space-y-1.5 pt-1 border-t border-slate-100">
          <div className="flex items-center justify-between text-[11px] font-semibold text-brand-text-muted">
            <span>Áreas Funcionales:</span>
            {selectedArea !== "ALL" && (
              <button
                onClick={() => onAreaChange("ALL")}
                className="text-brand-teal hover:underline text-[10px]"
              >
                Limpiar filtro
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {availableAreas.slice(0, 8).map((area) => (
              <button
                key={area}
                onClick={() => onAreaChange(selectedArea === area ? "ALL" : area)}
                className={`px-2 py-0.5 rounded-md text-[10px] transition-colors ${
                  selectedArea === area
                    ? "bg-emerald-700 text-white font-medium shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
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
