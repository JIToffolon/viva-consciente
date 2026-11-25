import Link from "next/link";
import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { Hourglass, Sun, ShieldPlus, ArrowRight } from "lucide-react";

export default function LongevidadPage() {
  return (
    <HeroScreenLayout
      badge="Salud Mitocondrial"
      title="Longevidad & Vitalidad Celular"
      subtitle="Fórmulas y fitoquímicos avanzados orientados a hábitos de bienestar biológico y envejecimiento celular saludable."
      ctaText="Explorar eje intestino-cerebro"
      ctaHref="/app/eje-intestino-cerebro"
      secondaryCtaText="Ver productos ancla: Longevity Glow & Triple Polifenol"
      secondaryCtaHref="/pro/vademecum"
      heroIcon={<Hourglass className="w-6 h-6 text-emerald-300" />}
    >
      <div className="space-y-4">
        <div className="bg-brand-surface dark:bg-dark-surface rounded-xl border border-brand-border dark:border-dark-border divide-y divide-brand-border dark:divide-dark-border shadow-sm">
          <div className="p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Vías Antioxidantes & Telómeros (Astrágalo & Tremella)
              </h2>
              <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
                Nutrientes que respaldan la síntesis de colágeno, hidratación tisular y protección frente al daño oxidativo ambiental.
              </p>
            </div>
          </div>

          <div className="p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-400 flex items-center justify-center shrink-0">
              <ShieldPlus className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Polifenoles Concentrados (Resveratrol & Curcumina)
              </h2>
              <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
                Complejos fitoquímicos de alta pureza para la modulación de las sirtuinas y enzimas protectoras endógenas.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brand-sage/80 dark:bg-dark-surface p-5 rounded-xl border border-brand-border dark:border-dark-border space-y-2">
          <h2 className="text-sm font-bold text-brand-forest dark:text-emerald-300 font-outfit">
            Línea Longevidad en Vademécum
          </h2>
          <p className="text-sm text-brand-text-muted dark:text-dark-text-muted leading-relaxed">
            Descubra las especificaciones técnicas de <strong>Longevity Glow</strong> y <strong>Triple Polifenol</strong> preparadas para prescripción informada.
          </p>
          <div className="pt-1">
            <Link
              href="/pro/vademecum"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal dark:text-teal-400 hover:underline font-outfit"
            >
              <span>Ver fichas de longevidad</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
