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
      <div className="space-y-3">
        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
            <Beaker className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Estandarización de Extractos</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Monitoreo riguroso de principios activos, polisacáridos en hongos funcionales y fitocompuestos bioactivos.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0">
            <Dna className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Vías Biológicas de Señalización</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Investigación en modulación NRF2, modulación de autofagia celular y soporte sinérgico de micronutrientes.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-700 flex items-center justify-center shrink-0">
            <FileSearch className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Validación Clínica & Bibliográfica</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Revisión constante de evidencia en PubMed y bases científicas internacionales para respaldo de cada formulación.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
