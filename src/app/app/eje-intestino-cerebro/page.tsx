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
      <div className="space-y-4">
        <div className="bg-brand-surface dark:bg-dark-surface rounded-xl border border-brand-border dark:border-dark-border divide-y divide-brand-border dark:divide-dark-border shadow-sm">
          <div className="p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-400 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Comunicación Bidireccional
              </h2>
              <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
                El nervio vago y los metabolitos bacterianos (ácidos grasos de cadena corta - SCFA) actúan como puente directo entre el intestino y la función cognitiva.
              </p>
            </div>
          </div>

          <div className="p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Permeabilidad e Inflamación Silente
              </h2>
              <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
                El soporte a la barrera mucosa y la diversidad microbiana previene la translocación de endotoxinas hacia la circulación sistémica.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brand-forest dark:bg-[#051B16] text-white p-5 md:p-6 rounded-xl border border-emerald-900/50 dark:border-dark-border space-y-2.5">
          <span className="text-xs font-semibold text-emerald-200 uppercase tracking-wider font-outfit">
            Recomendación Clínica
          </span>
          <h2 className="text-base font-bold text-white font-outfit">
            Soporte Integral con Golden Lion MCT
          </h2>
          <p className="text-sm text-emerald-50/90 leading-relaxed">
            La Melena de León aporta hericenonas y erinacinas que asisten la síntesis del factor de crecimiento nervioso (NGF), complementada con el combustible mitocondrial del MCT.
          </p>
          <div className="pt-1">
            <Link
              href="/pro/vademecum/golden-lion-mct"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-200 hover:text-white hover:underline transition-colors font-outfit"
            >
              <span>Ver ficha técnica de Golden Lion MCT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
