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
      <div className="space-y-3">
        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Disertantes Internacionales</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Referentes mundiales en medicina funcional, cronobiología y biología del envejecimiento.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Presentación de Papers & Pósteres</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Divulgación de investigaciones originales y trabajos clínicos sobre fitoterapia aplicada.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Edición 2026</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Próximamente anunciaremos las fechas oficiales y apertura de inscripciones para asistentes y disertantes.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
