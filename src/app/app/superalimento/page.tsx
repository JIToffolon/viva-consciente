import Link from "next/link";
import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { Apple, Leaf, Award, CheckCircle, ArrowRight } from "lucide-react";

export default function SuperalimentoPage() {
  return (
    <HeroScreenLayout
      badge="Pureza & Ciencia"
      title="Viva Superalimento®"
      subtitle="Unidad de alimentos y micronutrición funcional: máxima concentración de nutrientes, pureza botánica y ciencia biológica."
      ctaText="Explorar adaptógenos y hongos"
      ctaHref="/app/adaptogenos"
      secondaryCtaText="Consultar catálogo general en Vademécum"
      secondaryCtaHref="/pro/vademecum"
      heroIcon={<Apple className="w-6 h-6 text-emerald-300" />}
    >
      <div className="space-y-3">
        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0">
            <Leaf className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Alimentos Funcionales Densos</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Superalimentos crudos, polvos liofilizados y semillas funcionales sin conservantes ni aditivos de relleno.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Línea Original Viva Consciente</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Fórmulas clásicas con trazabilidad agroecológica y protocolos de molienda que preservan las enzimas vivas.
            </p>
          </div>
        </div>

        <div className="bg-emerald-50/80 border border-emerald-200 p-3.5 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Integración en la Rutina Diaria</span>
          </div>
          <p className="text-xs text-emerald-900/80 leading-relaxed">
            Diseñados para ser incorporados con facilidad en desayunos, batidos funcionales y bebidas inteligentes.
          </p>
          <div className="pt-1">
            <Link
              href="/pro/vademecum"
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:underline"
            >
              <span>Ver ficha técnica de productos en Vademécum</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
