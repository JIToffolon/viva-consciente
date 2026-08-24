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
      <div className="space-y-3.5">
        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Comunicación Bidireccional</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              El nervio vago y los metabolitos bacterianos (ácidos grasos de cadena corta - SCFA) actúan como puente directo entre el intestino y la función cognitiva.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-dark-surface-tint text-brand-emerald dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Permeabilidad e Inflamación Silente</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              El soporte a la barrera mucosa y la diversidad microbiana previene la translocación de endotoxinas hacia la circulación sistémica.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-forest via-[#0A3D2F] to-[#041F19] dark:from-[#031410] dark:via-[#082920] dark:to-[#041F18] text-white p-5 md:p-6 rounded-3xl shadow-lg border border-emerald-800/40 dark:border-emerald-700/30 space-y-2.5">
          <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider font-outfit">
            Recomendación Clínica
          </span>
          <h2 className="text-sm font-bold text-white font-outfit">
            Soporte Integral con Golden Lion MCT
          </h2>
          <p className="text-xs text-emerald-100/90 leading-relaxed">
            La Melena de León aporta hericenonas y erinacinas que asisten la síntesis del factor de crecimiento nervioso (NGF), complementada con el combustible mitocondrial del MCT.
          </p>
          <div className="pt-2">
            <Link
              href="/pro/vademecum/golden-lion-mct"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white transition-colors font-outfit"
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
