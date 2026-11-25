import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { MessagesSquare, Calendar, Award, Globe } from "lucide-react";

export default function ForumPage() {
  return (
    <HeroScreenLayout
      badge="Encuentro Científico"
      title="Forum Nutrición Celular & Longevidad"
      subtitle="Espacio anual de encuentro, formación de alto nivel, intercambio profesional e innovación alrededor de la salud biológica."
      ctaText="Ver eventos y alianzas"
      ctaHref="/app/eventos"
      secondaryCtaText="Paso anterior: Academia Viva Consciente"
      secondaryCtaHref="/app/academia"
      heroIcon={<MessagesSquare className="w-6 h-6 text-emerald-300" />}
    >
      <div className="bg-brand-surface dark:bg-dark-surface rounded-xl border border-brand-border dark:border-dark-border divide-y divide-brand-border dark:divide-dark-border shadow-sm">
        <div className="p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-400 flex items-center justify-center shrink-0">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
              Disertantes Internacionales
            </h2>
            <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Referentes mundiales en medicina funcional, cronobiología y biología del envejecimiento.
            </p>
          </div>
        </div>

        <div className="p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
              Presentación de Papers & Pósteres
            </h2>
            <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Divulgación de investigaciones originales y trabajos clínicos sobre fitoterapia aplicada.
            </p>
          </div>
        </div>

        <div className="p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
              Edición 2026
            </h2>
            <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Próximamente anunciaremos las fechas oficiales y apertura de inscripciones para asistentes y disertantes.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
