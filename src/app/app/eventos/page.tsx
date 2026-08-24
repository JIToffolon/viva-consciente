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
      <div className="space-y-3.5">
        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Handshake className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Alianzas Institucionales</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Convenios con sociedades médicas, cátedras de nutrición y centros de investigación botánica.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-dark-surface-tint text-brand-emerald dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Landmark className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Presencia en Congresos</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Stands interactivos, degustación de micronutrición y entrega de material técnico en eventos presenciales.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Megaphone className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Propuestas de Co-creación</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Abiertos a iniciativas conjuntas de investigación, desarrollo de líneas especiales y patrocinio académico.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
