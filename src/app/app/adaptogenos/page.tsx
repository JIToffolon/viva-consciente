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
      <div className="space-y-3">
        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Micología Funcional (Melena de León & Cordyceps)</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Extractos con estandarización en betaglucanos y compuestos activos orientados a la neuroplasticidad y el rendimiento.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Modulación del Estrés (Ashwagandha & Reishi)</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Botánicos que acompañan el equilibrio del eje HPA (hipotálamo-hipófisis-adrenal) para un descanso reparador.
            </p>
          </div>
        </div>

        <div className="bg-amber-50/70 border border-amber-200 p-3.5 rounded-xl space-y-2">
          <h2 className="text-xs font-bold text-amber-950">
            Fórmulas Destacadas en el Vademécum
          </h2>
          <p className="text-xs text-amber-900/80 leading-relaxed">
            Consulte las fichas técnicas completas de <strong>Golden Lion MCT</strong>, <strong>Open Mind</strong> y <strong>Ashwagandha</strong> en el área profesional.
          </p>
          <div className="pt-1">
            <Link
              href="/pro/vademecum"
              className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 hover:underline"
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
