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
      <div className="space-y-4">
        <div className="bg-brand-surface dark:bg-dark-surface rounded-xl border border-brand-border dark:border-dark-border divide-y divide-brand-border dark:divide-dark-border shadow-sm">
          <div className="p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Alimentos Funcionales Densos
              </h2>
              <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
                Superalimentos crudos, polvos liofilizados y semillas funcionales sin conservantes ni aditivos de relleno.
              </p>
            </div>
          </div>

          <div className="p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Línea Original Viva Consciente
              </h2>
              <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
                Fórmulas clásicas con trazabilidad agroecológica y protocolos de molienda que preservan las enzimas vivas.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brand-sage/80 dark:bg-dark-surface p-5 rounded-xl border border-brand-border dark:border-dark-border space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-brand-forest dark:text-emerald-300 font-outfit">
            <CheckCircle className="w-4 h-4 text-brand-green dark:text-emerald-400" />
            <span>Integración en la Rutina Diaria</span>
          </div>
          <p className="text-sm text-brand-text-muted dark:text-dark-text-muted leading-relaxed">
            Diseñados para ser incorporados con facilidad en desayunos, batidos funcionales y bebidas inteligentes.
          </p>
          <div className="pt-1">
            <Link
              href="/pro/vademecum"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal dark:text-teal-400 hover:underline font-outfit"
            >
              <span>Ver ficha técnica de productos en Vademécum</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
