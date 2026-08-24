import Link from "next/link";
import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { Sparkles, Brain, Shield, ArrowRight } from "lucide-react";

export default function AdaptogenosPage() {
  return (
    <HeroScreenLayout
      badge="Botánica de Vanguardia"
      title="Adaptógenos y Hongos Funcionales"
      subtitle="Hongos, botánicos ancestrales y fórmulas orientadas a complementar rutinas de energía limpia, enfoque y balance fisiológico."
      ctaText="Explorar longevidad celular"
      ctaHref="/app/longevidad"
      secondaryCtaText="Ver productos ancla: Melena de León & Ashwagandha"
      secondaryCtaHref="/pro/vademecum"
      heroIcon={<Sparkles className="w-6 h-6 text-amber-300" />}
    >
      <div className="space-y-3.5">
        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Micología Funcional (Melena de León & Cordyceps)</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Extractos con estandarización en betaglucanos y compuestos activos orientados a la neuroplasticidad y el rendimiento.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Modulación del Estrés (Ashwagandha & Reishi)</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Botánicos que acompañan el equilibrio del eje HPA (hipotálamo-hipófisis-adrenal) para un descanso reparador.
            </p>
          </div>
        </div>

        <div className="bg-amber-50/80 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 p-4 rounded-2xl space-y-2.5 transition-colors">
          <h2 className="text-xs font-bold text-amber-950 dark:text-amber-300 font-outfit">
            Fórmulas Destacadas en el Vademécum
          </h2>
          <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
            Consulte las fichas técnicas completas de <strong>Golden Lion MCT</strong>, <strong>Open Mind</strong> y <strong>Ashwagandha</strong> en el área profesional.
          </p>
          <div className="pt-1">
            <Link
              href="/pro/vademecum"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300 hover:underline font-outfit"
            >
              <span>Ir a fichas de adaptógenos en Vademécum</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
