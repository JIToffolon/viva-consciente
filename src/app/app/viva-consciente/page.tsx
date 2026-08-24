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
      <div className="space-y-3.5">
        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Modelo Transdisciplinario</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Conectamos profesionales de la salud, investigadores botánicos y formuladores bajo estándares de máxima pureza.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-dark-surface-tint text-brand-emerald dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Unidades Articuladas</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Desde la ciencia aplicada en el Centro de Investigaciones hasta la producción de superalimentos y la divulgación en foros académicos.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Compromiso de Pureza</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Ingredientes con trazabilidad botánica, sin aditivos sintéticos, extractos estandarizados y validación técnica continua.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
