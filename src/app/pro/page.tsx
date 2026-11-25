import Link from "next/link";
import { ShieldCheck, FileText, ArrowRight, Download, AlertCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import productsData from "@/data/products.json";
import { ProductMaster } from "@/types/product";
import { ProductCard } from "@/components/vademecum/ProductCard";

export default function ProHubPage() {
  const products = productsData as ProductMaster[];
  const anchorProducts = products.filter((p) => p.isAnchorFeatured);

  return (
    <div className="space-y-6">
      {/* Hero PRO */}
      <div className="rounded-xl bg-brand-forest dark:bg-[#051B16] p-6 md:p-8 text-white border border-emerald-900/50 dark:border-dark-border">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-200 border border-amber-400/30 font-outfit">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Módulo Profesional</span>
          </span>
          <span className="text-xs font-medium text-emerald-200/90">Fase 1: Acceso Abierto</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-white font-outfit">
          Área Profesionales de la Salud
        </h1>
        <p className="text-sm md:text-base text-emerald-50/90 mt-2 leading-relaxed max-w-2xl">
          Acceso estructurado a fichas técnicas, vademécum digital, estandarización botánica y recursos para prescripción informada.
        </p>

        <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-3">
          <Link
            href="/pro/vademecum"
            className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-5 bg-brand-teal hover:bg-[#0B5E75] text-white text-sm font-semibold rounded-lg transition-colors font-outfit"
          >
            <FileText className="w-4 h-4" />
            <span>Explorar Vademécum Completo</span>
          </Link>
          <a
            href="https://wa.me/5491100000000?text=Hola%20Viva%20Consciente%2C%20deseo%20contactar%20al%20%C3%A1rea%20profesional"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold rounded-lg transition-colors font-outfit"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp Médico PRO</span>
          </a>
        </div>
      </div>

      {/* Disclaimer Editorial */}
      <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 border-l-4 border-l-amber-500 p-4 rounded-lg flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-800 dark:text-amber-300 shrink-0 mt-0.5" />
        <div className="text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
          <strong>Uso Exclusivo de Divulgación:</strong> La información contenida en esta sección está destinada exclusivamente a médicos, nutricionistas, naturópatas e investigadores de la salud.
        </div>
      </div>

      {/* Quick Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/pro/vademecum"
          className="p-5 bg-brand-surface dark:bg-dark-surface rounded-xl border border-brand-border dark:border-dark-border shadow-sm hover:border-brand-teal/60 dark:hover:border-teal-500/60 transition-colors flex items-center gap-4 group"
        >
          <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-400 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-brand-text-main dark:text-dark-text-main font-outfit group-hover:text-brand-teal dark:group-hover:text-teal-300 transition-colors">
              Vademécum V2
            </h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-0.5">
              Catálogo con filtros reactivos y fichas técnicas
            </p>
          </div>
        </Link>

        <a
          href="https://wa.me/5491100000000?text=Hola%20Viva%20Consciente%2C%20deseo%20solicitar%20el%20dossier%20m%C3%A9dico%20en%20PDF"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-brand-surface dark:bg-dark-surface rounded-xl border border-brand-border dark:border-dark-border shadow-sm hover:border-amber-500/70 transition-colors flex items-center gap-4 group"
        >
          <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-brand-gold dark:text-amber-400 flex items-center justify-center shrink-0">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-brand-text-main dark:text-dark-text-main font-outfit group-hover:text-brand-gold dark:group-hover:text-amber-300 transition-colors">
              Dossier Clínico
            </h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-0.5">
              Solicitar documentación vía WhatsApp PRO
            </p>
          </div>
        </a>
      </div>

      {/* Featured Anchor Products Grid */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main uppercase tracking-wider font-outfit">
            Productos Ancla Destacados ({anchorProducts.length})
          </h2>
          <Link
            href="/pro/vademecum"
            className="text-sm font-semibold text-brand-teal dark:text-teal-400 hover:underline flex items-center gap-1 font-outfit"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-4 h-4" />
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
