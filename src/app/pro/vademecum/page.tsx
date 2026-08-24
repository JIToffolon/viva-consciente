"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft, Filter, BookOpen, AlertCircle } from "lucide-react";
import productsData from "@/data/products.json";
import { ProductMaster, ProductFamily } from "@/types/product";
import { ProductCard } from "@/components/vademecum/ProductCard";
import { ProductSummaryCard } from "@/components/vademecum/ProductSummaryCard";
import { SearchAndFilterBar } from "@/components/vademecum/SearchAndFilterBar";

export default function VademecumPage() {
  const allProducts = productsData as ProductMaster[];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFamily, setSelectedFamily] = useState<ProductFamily | "ALL">("ALL");
  const [selectedArea, setSelectedArea] = useState<string | "ALL">("ALL");

  // Extract unique functional areas
  const availableAreas = useMemo(() => {
    const areas = new Set<string>();
    allProducts.forEach((p) => {
      p.functionalAreas?.forEach((a) => areas.add(a));
    });
    return Array.from(areas);
  }, [allProducts]);

  // Filtered products list in memory
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return allProducts.filter((product) => {
      // Family match
      if (selectedFamily !== "ALL" && product.family !== selectedFamily) {
        return false;
      }

      // Functional area match
      if (
        selectedArea !== "ALL" &&
        (!product.functionalAreas || !product.functionalAreas.includes(selectedArea))
      ) {
        return false;
      }

      // Search query match (name, description, ingredients, areas)
      if (query) {
        const matchName = product.name.toLowerCase().includes(query);
        const matchDesc = product.functionalDescription.toLowerCase().includes(query);
        const matchAreas = product.functionalAreas?.some((a) =>
          a.toLowerCase().includes(query)
        );
        const matchIngredients = product.composition.items?.some((item) =>
          item.name.toLowerCase().includes(query)
        );

        if (!matchName && !matchDesc && !matchAreas && !matchIngredients) {
          return false;
        }
      }

      return true;
    });
  }, [allProducts, searchQuery, selectedFamily, selectedArea]);

  const anchorProducts = filteredProducts.filter((p) => p.isAnchorFeatured);
  const generalProducts = filteredProducts.filter((p) => !p.isAnchorFeatured);

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      {/* Header Bar */}
      <div className="flex items-center justify-between pt-1">
        <Link
          href="/pro"
          className="inline-flex items-center gap-1.5 text-xs text-brand-text-muted hover:text-brand-teal font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Hub PRO</span>
        </Link>
        <span className="text-[11px] font-bold text-brand-teal bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
          {filteredProducts.length} Fórmulas
        </span>
      </div>

      {/* Title & Editorial Note */}
      <div>
        <h1 className="text-xl font-bold text-brand-text-main">
          Vademécum Profesional Digital
        </h1>
        <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
          Portfolio estructurado para consulta técnica rápida en menos de 5 minutos.
        </p>
      </div>

      {/* Reactive Search and Filter Bar */}
      <SearchAndFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedFamily={selectedFamily}
        onFamilyChange={setSelectedFamily}
        selectedArea={selectedArea}
        onAreaChange={setSelectedArea}
        availableAreas={availableAreas}
      />

      {/* Results Section */}
      {filteredProducts.length === 0 ? (
        <div className="bg-brand-surface p-8 rounded-2xl border border-slate-200 text-center space-y-2">
          <BookOpen className="w-8 h-8 text-brand-text-muted mx-auto" />
          <h2 className="text-sm font-bold text-brand-text-main">No se encontraron productos</h2>
          <p className="text-xs text-brand-text-muted">
            Intente con otro término o limpie los filtros seleccionados.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedFamily("ALL");
              setSelectedArea("ALL");
            }}
            className="mt-2 px-3 py-1.5 bg-brand-teal text-white text-xs font-semibold rounded-lg"
          >
            Restablecer filtros
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Section 1: Anchor Products */}
          {anchorProducts.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <h2 className="text-xs font-bold text-brand-text-main uppercase tracking-wider">
                  Productos Ancla Destacados ({anchorProducts.length})
                </h2>
              </div>
              <div className="space-y-3">
                {anchorProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Section 2: General Catalog */}
          {generalProducts.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
                <BookOpen className="w-4 h-4 text-slate-500" />
                <h2 className="text-xs font-bold text-brand-text-main uppercase tracking-wider">
                  Catálogo Complementario ({generalProducts.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {generalProducts.map((product) => (
                  <ProductSummaryCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
