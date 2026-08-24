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
      <div className="space-y-3">
        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
            <Sun className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Vías Antioxidantes & Telómeros (Astrágalo & Tremella)</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Nutrientes que respaldan la síntesis de colágeno, hidratación tisular y protección frente al daño oxidativo ambiental.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0">
            <ShieldPlus className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Polifenoles Concentrados (Resveratrol & Curcumina)</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Complejos fitoquímicos de alta pureza para la modulación de las sirtuinas y enzimas protectoras endógenas.
            </p>
          </div>
        </div>

        <div className="bg-teal-50/70 border border-teal-200 p-3.5 rounded-xl space-y-2">
          <h2 className="text-xs font-bold text-teal-950">
            Línea Longevidad en Vademécum
          </h2>
          <p className="text-xs text-teal-900/80 leading-relaxed">
            Descubra las especificaciones técnicas de <strong>Longevity Glow</strong> y <strong>Triple Polifenol</strong> preparadas para prescripción informada.
          </p>
          <div className="pt-1">
            <Link
              href="/pro/vademecum"
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-teal hover:underline"
            >
              <span>Ver fichas de longevidad</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
