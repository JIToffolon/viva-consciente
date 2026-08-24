import Link from "next/link";
import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { Network, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export default function EjeIntestinoCerebroPage() {
  return (
    <HeroScreenLayout
      badge="Microbiota & Neurociencia"
      title="Eje Intestino-Cerebro"
      subtitle="Divulgación científica: microbiota, sistema nervioso entérico, producción de neurotransmisores e inteligencia biológica integrada."
      ctaText="Entrar al Área Profesional PRO"
      ctaHref="/pro"
      secondaryCtaText="Paso anterior: Longevidad Celular"
      secondaryCtaHref="/app/longevidad"
      heroIcon={<Network className="w-6 h-6 text-emerald-300" />}
    >
      <div className="space-y-3">
        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Comunicación Bidireccional</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              El nervio vago y los metabolitos bacterianos (ácidos grasos de cadena corta - SCFA) actúan como puente directo entre el intestino y la función cognitiva.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Permeabilidad e Inflamación Silente</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              El soporte a la barrera mucosa y la diversidad microbiana previene la translocación de endotoxinas hacia la circulación sistémica.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white p-4 rounded-xl shadow-md space-y-2">
          <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
            Recomendación Clínica
          </span>
          <h2 className="text-xs font-bold text-white">
            Soporte Integral con Golden Lion MCT
          </h2>
          <p className="text-xs text-slate-200 leading-relaxed">
            La Melena de León aporta hericenonas y erinacinas que asisten la síntesis del factor de crecimiento nervioso (NGF), complementada con el combustible mitocondrial del MCT.
          </p>
          <div className="pt-1">
            <Link
              href="/pro/vademecum/golden-lion-mct"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-emerald-200"
            >
              <span>Ver ficha técnica de Golden Lion MCT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
