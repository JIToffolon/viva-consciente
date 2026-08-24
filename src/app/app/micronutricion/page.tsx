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
      <div className="space-y-3.5">
        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Cofactores Mitocondriales</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Moléculas orientadas al metabolismo energético eficiente, transporte de electrones y producción endógena de ATP.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Resiliencia Metabólica</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Combinaciones sinérgicas que asisten la sensibilidad a la glucosa y la modulación de rutas inflamatorias.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-dark-surface-tint text-brand-emerald dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldPlus className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Biodisponibilidad Superior</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Formas queladas, lípidos de transporte MCT y fitosomas para maximizar la absorción y tolerancia gastrointestinal.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
