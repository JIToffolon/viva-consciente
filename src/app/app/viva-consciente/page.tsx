import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { Building2, Network, Compass, Sparkles } from "lucide-react";

export default function VivaConscientePage() {
  return (
    <HeroScreenLayout
      badge="Visión Sistémica"
      title="Una organización, múltiples áreas conectadas"
      subtitle="Integramos investigación, desarrollo, educación y unidades especializadas dentro de una misma visión de salud biológica."
      ctaText="Conocer nuestras áreas"
      ctaHref="/app/investigacion"
      secondaryCtaText="Volver al Inicio"
      secondaryCtaHref="/app"
      heroIcon={<Building2 className="w-6 h-6 text-emerald-300" />}
    >
      <div className="space-y-3">
        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
            <Network className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Modelo Transdisciplinario</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Conectamos profesionales de la salud, investigadores botánicos y formuladores bajo estándares de máxima pureza.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Unidades Articuladas</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Desde la ciencia aplicada en el Centro de Investigaciones hasta la producción de superalimentos y la divulgación en foros académicos.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Compromiso de Pureza</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Ingredientes con trazabilidad botánica, sin aditivos sintéticos, extractos estandarizados y validación técnica continua.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
