import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { CalendarDays, Handshake, Landmark, Megaphone } from "lucide-react";

export default function EventosPage() {
  return (
    <HeroScreenLayout
      badge="Agenda & Congresos"
      title="Eventos y Alianzas"
      subtitle="Participaciones institucionales, congresos médicos, exposiciones científicas y vinculación estratégica con laboratorios y universidades."
      ctaText="Sumarme a la comunidad"
      ctaHref="/app/comunidad"
      secondaryCtaText="Paso anterior: Forum de Longevidad"
      secondaryCtaHref="/app/forum"
      heroIcon={<CalendarDays className="w-6 h-6 text-emerald-300" />}
    >
      <div className="space-y-3">
        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
            <Handshake className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Alianzas Institucionales</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Convenios con sociedades médicas, cátedras de nutrición y centros de investigación botánica.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0">
            <Landmark className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Presencia en Congresos</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Stands interactivos, degustación de micronutrición y entrega de material técnico en eventos presenciales.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
            <Megaphone className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Propuestas de Co-creación</h2>
            <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
              Abiertos a iniciativas conjuntas de investigación, desarrollo de líneas especiales y patrocinio académico.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
