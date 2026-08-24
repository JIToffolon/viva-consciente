import Link from "next/link";
import { Sparkles, ShieldCheck, FileText, ArrowRight, Download, MessageSquare, AlertCircle } from "lucide-react";
import productsData from "@/data/products.json";
import { ProductMaster } from "@/types/product";
import { ProductCard } from "@/components/vademecum/ProductCard";

export default function ProHubPage() {
  const products = productsData as ProductMaster[];
  const anchorProducts = products.filter((p) => p.isAnchorFeatured);

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      {/* Hero PRO */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 p-5 text-white shadow-md">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3 h-3" />
            <span>Módulo Profesional</span>
          </span>
          <span className="text-[11px] font-medium text-slate-300">Fase 1: Acceso Abierto</span>
        </div>
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-white">
          Área Profesionales de la Salud
        </h1>
        <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
          Acceso estructurado a fichas técnicas, vademécum digital, estandarización botánica y recursos para prescripción informada.
        </p>

        <div className="mt-4 pt-3 border-t border-white/10 flex gap-2">
          <Link
            href="/pro/vademecum"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 bg-brand-teal text-white text-xs font-semibold rounded-xl hover:bg-teal-700 transition-colors shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Explorar Vademécum</span>
          </Link>
          <Link
            href="/app/contacto"
            className="flex items-center justify-center py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl transition-colors border border-white/10"
          >
            <MessageSquare className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Disclaimer Editorial */}
      <div className="bg-amber-50/80 border border-amber-200/90 p-3.5 rounded-xl flex items-start gap-2.5 shadow-2xs">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 leading-relaxed">
          <strong>Uso Exclusivo de Divulgación:</strong> La información contenida en esta sección está destinada exclusivamente a médicos, nutricionistas, naturópatas e investigadores de la salud.
        </div>
      </div>

      {/* Quick Action Grid */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          href="/pro/vademecum"
          className="p-3.5 bg-brand-surface rounded-xl border border-slate-200 shadow-xs hover:border-brand-teal/40 transition-all flex flex-col justify-between group"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Vademécum V2</h2>
            <p className="text-[10px] text-brand-text-muted mt-0.5">Catálogo con filtros reactivos</p>
          </div>
        </Link>

        <a
          href="https://wa.me/5491100000000?text=Hola%20Viva%20Consciente%2C%20deseo%20solicitar%20el%20dossier%20m%C3%A9dico%20en%20PDF"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-brand-surface rounded-xl border border-slate-200 shadow-xs hover:border-brand-gold/40 transition-all flex flex-col justify-between group"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-brand-gold flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <Download className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Dossier Clínico</h2>
            <p className="text-[10px] text-brand-text-muted mt-0.5">Solicitar vía WhatsApp PRO</p>
          </div>
        </a>
      </div>

      {/* Featured Anchor Products Preview */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-brand-text-main uppercase tracking-wider">
            Productos Ancla Destacados ({anchorProducts.length})
          </h2>
          <Link
            href="/pro/vademecum"
            className="text-[11px] font-semibold text-brand-teal hover:underline flex items-center gap-0.5"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="space-y-3">
          {anchorProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
