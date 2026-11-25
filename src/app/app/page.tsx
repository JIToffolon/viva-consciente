import Link from "next/link";
import { ArrowRight, ShieldCheck, Microscope, HeartPulse, Leaf } from "lucide-react";
import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";

export default function PortadaPage() {
  return (
    <HeroScreenLayout
      badge="Ecosistema Integral"
      title="Viva Consciente Organización"
      subtitle="Ciencia, naturaleza e innovación para una nueva salud biológica, celular y metabólica."
      ctaText="Explorar el ecosistema"
      ctaHref="/app/viva-consciente"
      secondaryCtaText="Acceso directo a Profesionales PRO"
      secondaryCtaHref="/pro"
      heroIcon={<Leaf className="w-6 h-6 text-emerald-300" />}
    >
      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-1">
        <Link
          href="/app/investigacion"
          className="p-4 bg-brand-surface dark:bg-dark-surface border border-brand-border dark:border-dark-border rounded-xl hover:border-brand-teal/60 dark:hover:border-teal-500/60 transition-colors flex flex-col justify-between shadow-sm group"
        >
          <div className="w-9 h-9 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-400 flex items-center justify-center mb-3">
            <Microscope className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit group-hover:text-brand-teal dark:group-hover:text-teal-300 transition-colors">
              Investigación
            </h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-0.5">
              Herbolaria & Ciencia
            </p>
          </div>
        </Link>

        <Link
          href="/app/superalimento"
          className="p-4 bg-brand-surface dark:bg-dark-surface border border-brand-border dark:border-dark-border rounded-xl hover:border-brand-teal/60 dark:hover:border-teal-500/60 transition-colors flex flex-col justify-between shadow-sm group"
        >
          <div className="w-9 h-9 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center mb-3">
            <HeartPulse className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit group-hover:text-brand-teal dark:group-hover:text-teal-300 transition-colors">
              Superalimento®
            </h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-0.5">
              Micronutrición Pura
            </p>
          </div>
        </Link>

        <Link
          href="/app/adaptogenos"
          className="p-4 bg-brand-surface dark:bg-dark-surface border border-brand-border dark:border-dark-border rounded-xl hover:border-brand-teal/60 dark:hover:border-teal-500/60 transition-colors flex flex-col justify-between shadow-sm group"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 flex items-center justify-center mb-3">
            <Leaf className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit group-hover:text-brand-teal dark:group-hover:text-teal-300 transition-colors">
              Adaptógenos
            </h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-0.5">
              Hongos & Botánica
            </p>
          </div>
        </Link>

        <Link
          href="/pro/vademecum"
          className="p-4 bg-brand-sage/70 dark:bg-dark-surface-tint border border-brand-border dark:border-dark-border border-l-4 border-l-brand-gold rounded-xl hover:border-brand-teal dark:hover:border-teal-400 transition-colors flex flex-col justify-between shadow-sm group"
        >
          <div className="w-9 h-9 rounded-lg bg-brand-forest dark:bg-brand-teal text-white flex items-center justify-center mb-3">
            <ShieldCheck className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-forest dark:text-emerald-200 font-outfit">
              Vademécum PRO
            </h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-0.5">
              Fórmulas V2
            </p>
          </div>
        </Link>
      </div>

      {/* Institutional Highlights */}
      <div className="bg-brand-surface dark:bg-dark-surface p-5 md:p-6 rounded-xl border border-brand-border dark:border-dark-border shadow-sm space-y-3">
        <h2 className="text-xs font-bold text-brand-teal dark:text-teal-300 uppercase tracking-wider font-outfit">
          Pilares del Ecosistema
        </h2>
        <p className="text-sm text-brand-text-muted dark:text-dark-text-muted leading-relaxed">
          Viva Consciente integra en un solo marco la investigación botánica de avanzada, la formulación clínica de micronutrición y la divulgación médica orientada al eje intestino-cerebro y la longevidad celular.
        </p>
        <div className="pt-1">
          <Link
            href="/app/viva-consciente"
            className="inline-flex items-center gap-1.5 text-sm text-brand-teal dark:text-teal-400 font-semibold font-outfit hover:underline"
          >
            <span>Conocer la estructura de la organización</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
