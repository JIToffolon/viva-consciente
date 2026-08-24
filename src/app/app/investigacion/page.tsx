import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { Microscope, Beaker, FileSearch, Dna } from "lucide-react";

export default function InvestigacionPage() {
  return (
    <HeroScreenLayout
      badge="I+D Científica"
      title="Centro de Investigaciones"
      subtitle="Herbolaria, medicinas biológicas y desarrollo científico aplicado al bienestar celular y mitocondrial."
      ctaText="Ver micronutrición"
      ctaHref="/app/micronutricion"
      secondaryCtaText="Paso anterior: Visión Institucional"
      secondaryCtaHref="/app/viva-consciente"
      heroIcon={<Microscope className="w-6 h-6 text-emerald-300" />}
    >
      <div className="space-y-3.5">
        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Beaker className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Estandarización de Extractos</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Monitoreo riguroso de principios activos, polisacáridos en hongos funcionales y fitocompuestos bioactivos.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-dark-surface-tint text-brand-emerald dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Dna className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Vías Biológicas de Señalización</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Investigación en modulación NRF2, modulación de autofagia celular y soporte sinérgico de micronutrientes.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-surface-tint text-slate-700 dark:text-dark-text-muted flex items-center justify-center shrink-0">
            <FileSearch className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Validación Clínica & Bibliográfica</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Revisión constante de evidencia en PubMed y bases científicas internacionales para respaldo de cada formulación.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
