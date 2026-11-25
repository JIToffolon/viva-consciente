import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { Zap, Activity, Flame, ShieldPlus } from "lucide-react";

export default function MicronutricionPage() {
  return (
    <HeroScreenLayout
      badge="Unidad Especializada"
      title="Micronutrición Funcional"
      subtitle="Intervención inteligente sobre funciones celulares, metabólicas y sistémicas a través de cofactores biológicamente activos."
      ctaText="Conocer Viva Superalimento®"
      ctaHref="/app/superalimento"
      secondaryCtaText="Paso anterior: Centro de Investigaciones"
      secondaryCtaHref="/app/investigacion"
      heroIcon={<Zap className="w-6 h-6 text-amber-300" />}
    >
      <div className="bg-brand-surface dark:bg-dark-surface rounded-xl border border-brand-border dark:border-dark-border divide-y divide-brand-border dark:divide-dark-border shadow-sm">
        <div className="p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
              Cofactores Mitocondriales
            </h2>
            <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Moléculas orientadas al metabolismo energético eficiente, transporte de electrones y producción endógena de ATP.
            </p>
          </div>
        </div>

        <div className="p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-400 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
              Resiliencia Metabólica
            </h2>
            <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Combinaciones sinérgicas que asisten la sensibilidad a la glucosa y la modulación de rutas inflamatorias.
            </p>
          </div>
        </div>

        <div className="p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldPlus className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
              Biodisponibilidad Superior
            </h2>
            <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Formas queladas, lípidos de transporte MCT y fitosomas para maximizar la absorción y tolerancia gastrointestinal.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
