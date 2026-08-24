import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { GraduationCap, BookOpen, Video, Users } from "lucide-react";

export default function AcademiaPage() {
  return (
    <HeroScreenLayout
      badge="Formación & Divulgación"
      title="Academia Viva Consciente"
      subtitle="Formación continuada, contenidos científicos, conferencias y recursos pedagógicos para profesionales y la comunidad."
      ctaText="Conocer el Forum"
      ctaHref="/app/forum"
      secondaryCtaText="Paso anterior: Eje Intestino-Cerebro"
      secondaryCtaHref="/app/eje-intestino-cerebro"
      heroIcon={<GraduationCap className="w-6 h-6 text-emerald-300" />}
    >
      <div className="space-y-3.5">
        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Cursos & Masterclasses</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Módulos intensivos sobre micronutrición aplicada, micología terapéutica y modulación epigenética del envejecimiento.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-dark-surface-tint text-brand-emerald dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Webinars con Especialistas</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Encuentros virtuales en vivo con médicos integrativos, nutricionistas y botánicos de la región.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-surface-tint text-slate-700 dark:text-dark-text-muted flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Comunidad de Aprendizaje</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Espacio de intercambio de casos clínicos, protocolos y discusión de novedades bibliográficas.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
