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
      <div className="space-y-3">
        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Cursos & Masterclasses</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Módulos intensivos sobre micronutrición aplicada, micología terapéutica y modulación epigenética del envejecimiento.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0">
            <Video className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Webinars con Especialistas</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Encuentros virtuales en vivo con médicos integrativos, nutricionistas y botánicos de la región.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-700 flex items-center justify-center shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Comunidad de Aprendizaje</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Espacio de intercambio de casos clínicos, protocolos y discusión de novedades bibliográficas.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
