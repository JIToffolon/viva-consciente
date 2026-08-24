import Link from "next/link";
import { Sparkles, ShieldCheck, FileText, ArrowRight, Download, MessageSquare, AlertCircle } from "lucide-react";
import productsData from "@/data/products.json";
import { ProductMaster } from "@/types/product";
import { ProductCard } from "@/components/vademecum/ProductCard";

export default function ProHubPage() {
  const products = productsData as ProductMaster[];
  const anchorProducts = products.filter((p) => p.isAnchorFeatured);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Hero PRO */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-forest via-[#0A3D2F] to-[#041F19] p-6 md:p-8 text-white shadow-lg border border-emerald-800/40">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 font-outfit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Módulo Profesional</span>
          </span>
          <span className="text-xs font-semibold text-emerald-200/80">Fase 1: Acceso Abierto</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight text-white font-outfit">
          Área Profesionales de la Salud
        </h1>
        <p className="text-xs md:text-sm text-emerald-100/80 mt-2 leading-relaxed max-w-xl">
          Acceso estructurado a fichas técnicas, vademécum digital, estandarización botánica y recursos para prescripción informada.
        </p>

        <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-3">
          <Link
            href="/pro/vademecum"
            className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-5 bg-gradient-to-r from-brand-emerald to-brand-green hover:from-brand-green hover:to-emerald-600 text-white text-xs font-bold rounded-2xl transition-all shadow-md shadow-brand-emerald/20 font-outfit"
          >
            <FileText className="w-4 h-4" />
            <span>Explorar Vademécum Completo</span>
          </Link>
          <Link
            href="/app/contacto"
            className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-2xl transition-colors border border-white/15 font-outfit"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contactar Asesoría Médica</span>
          </Link>
        </div>
      </div>

      {/* Disclaimer Editorial */}
      <div className="bg-amber-50/90 border border-amber-300 p-4 rounded-2xl flex items-start gap-3 shadow-2xs">
        <AlertCircle className="w-4.5 h-4.5 text-amber-800 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 leading-relaxed font-medium">
          <strong>Uso Exclusivo de Divulgación:</strong> La información contenida en esta sección está destinada exclusivamente a médicos, nutricionistas, naturópatas e investigadores de la salud.
        </div>
      </div>

      {/* Quick Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <Link
          href="/pro/vademecum"
          className="p-5 bg-brand-surface rounded-3xl border border-brand-border shadow-2xs hover:border-brand-green/50 hover:shadow-md transition-all flex flex-col justify-between group"
        >
          <div className="w-10 h-10 rounded-2xl bg-brand-sage text-brand-green flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main font-outfit group-hover:text-brand-green transition-colors">
              Vademécum V2
            </h2>
            <p className="text-[11px] text-brand-text-muted mt-0.5">Catálogo con filtros reactivos</p>
          </div>
        </Link>

        <a
          href="https://wa.me/5491100000000?text=Hola%20Viva%20Consciente%2C%20deseo%20solicitar%20el%20dossier%20m%C3%A9dico%20en%20PDF"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-brand-surface rounded-3xl border border-brand-border shadow-2xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
        >
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-brand-gold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main font-outfit group-hover:text-brand-gold transition-colors">
              Dossier Clínico
            </h2>
            <p className="text-[11px] text-brand-text-muted mt-0.5">Solicitar vía WhatsApp PRO</p>
          </div>
        </a>
      </div>

      {/* Featured Anchor Products Grid */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-brand-forest uppercase tracking-wider font-outfit">
            Productos Ancla Destacados ({anchorProducts.length})
          </h2>
          <Link
            href="/pro/vademecum"
            className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1 font-outfit"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {anchorProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
