import Link from "next/link";
import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { Sparkles, ArrowRight, ShieldCheck, Microscope, HeartPulse, Users, BookOpen } from "lucide-react";

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
      heroIcon={<Sparkles className="w-6 h-6 text-emerald-300" />}
    >
      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <Link
          href="/app/investigacion"
          className="p-3.5 bg-brand-surface border border-slate-200 rounded-xl hover:border-brand-teal/40 transition-all flex flex-col justify-between shadow-xs group"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <Microscope className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Investigación</h2>
            <p className="text-[10px] text-brand-text-muted mt-0.5">Herbolaria & Ciencia</p>
          </div>
        </Link>

        <Link
          href="/app/superalimento"
          className="p-3.5 bg-brand-surface border border-slate-200 rounded-xl hover:border-brand-teal/40 transition-all flex flex-col justify-between shadow-xs group"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <HeartPulse className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Superalimento®</h2>
            <p className="text-[10px] text-brand-text-muted mt-0.5">Micronutrición</p>
          </div>
        </Link>

        <Link
          href="/app/adaptogenos"
          className="p-3.5 bg-brand-surface border border-slate-200 rounded-xl hover:border-brand-teal/40 transition-all flex flex-col justify-between shadow-xs group"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main">Adaptógenos</h2>
            <p className="text-[10px] text-brand-text-muted mt-0.5">Hongos & Botánica</p>
          </div>
        </Link>

        <Link
          href="/pro/vademecum"
          className="p-3.5 bg-gradient-to-br from-teal-50 to-emerald-50 border border-brand-teal/30 rounded-xl hover:border-brand-teal transition-all flex flex-col justify-between shadow-xs group"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-teal text-white flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-teal">Vademécum PRO</h2>
            <p className="text-[10px] text-slate-600 mt-0.5">Fórmulas V2</p>
          </div>
        </Link>
      </div>

      {/* Institutional Highlights */}
      <div className="bg-brand-surface p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-teal" />
          <h2 className="text-xs font-bold text-brand-text-main uppercase tracking-wider">
            Pilares del Ecosistema
          </h2>
        </div>
        <p className="text-xs text-brand-text-muted leading-relaxed">
          Viva Consciente integra en un solo marco la investigación botánica de avanzada, la formulación clínica de micronutrición y la divulgación médica orientada al eje intestino-cerebro y la longevidad celular.
        </p>
        <div className="pt-1 flex items-center justify-between text-xs text-brand-teal font-semibold">
          <Link href="/app/viva-consciente" className="inline-flex items-center gap-1 hover:underline">
            <span>Conocer la estructura de la organización</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
