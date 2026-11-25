import Link from "next/link";
import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { Leaf, Brain, Shield, ArrowRight } from "lucide-react";

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
      heroIcon={<Leaf className="w-6 h-6 text-emerald-300" />}
    >
      <div className="space-y-4">
        <div className="bg-brand-surface dark:bg-dark-surface rounded-xl border border-brand-border dark:border-dark-border divide-y divide-brand-border dark:divide-dark-border shadow-sm">
          <div className="p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-400 flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Micología Funcional (Melena de León & Cordyceps)
              </h2>
              <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
                Extractos con estandarización en betaglucanos y compuestos activos orientados a la neuroplasticidad y el rendimiento.
              </p>
            </div>
          </div>

          <div className="p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Modulación del Estrés (Ashwagandha & Reishi)
              </h2>
              <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
                Botánicos que acompañan el equilibrio del eje HPA (hipotálamo-hipófisis-adrenal) para un descanso reparador.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 border-l-4 border-l-amber-500 p-4 rounded-xl space-y-2">
          <h2 className="text-sm font-bold text-amber-950 dark:text-amber-300 font-outfit">
            Fórmulas Destacadas en el Vademécum
          </h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Consulte las fichas técnicas completas de <strong>Golden Lion MCT</strong>, <strong>Open Mind</strong> y <strong>Ashwagandha</strong> en el área profesional.
          </p>
          <div className="pt-1">
            <Link
              href="/pro/vademecum"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-950 dark:text-amber-300 hover:underline font-outfit"
            >
              <span>Ir a fichas de adaptógenos en Vademécum</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
