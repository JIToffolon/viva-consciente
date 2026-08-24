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
      <div className="space-y-3">
        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Cofactores Mitocondriales</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Moléculas orientadas al metabolismo energético eficiente, transporte de electrones y producción endógena de ATP.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Resiliencia Metabólica</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Combinaciones sinérgicas que asisten la sensibilidad a la glucosa y la modulación de rutas inflamatorias.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0">
            <ShieldPlus className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Biodisponibilidad Superior</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Formas queladas, lípidos de transporte MCT y fitosomas para maximizar la absorción y tolerancia gastrointestinal.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
