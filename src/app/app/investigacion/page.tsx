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
      <div className="bg-brand-surface dark:bg-dark-surface rounded-xl border border-brand-border dark:border-dark-border divide-y divide-brand-border dark:divide-dark-border shadow-sm">
        <div className="p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-400 flex items-center justify-center shrink-0">
            <Beaker className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
              Estandarización de Extractos
            </h2>
            <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Monitoreo riguroso de principios activos, polisacáridos en hongos funcionales y fitocompuestos bioactivos.
            </p>
          </div>
        </div>

        <div className="p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Dna className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
              Vías Biológicas de Señalización
            </h2>
            <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Investigación en modulación NRF2, modulación de autofagia celular y soporte sinérgico de micronutrientes.
            </p>
          </div>
        </div>

        <div className="p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-brand-surface-tint dark:bg-dark-surface-tint text-brand-text-main dark:text-dark-text-muted border border-brand-border dark:border-dark-border flex items-center justify-center shrink-0">
            <FileSearch className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
              Validación Clínica & Bibliográfica
            </h2>
            <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Revisión constante de evidencia en PubMed y bases científicas internacionales para respaldo de cada formulación.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
