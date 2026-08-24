import Link from "next/link";
import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { Sparkles, ArrowRight, ShieldCheck, Microscope, HeartPulse, Leaf, BookOpen, Compass } from "lucide-react";

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
      {/* Quick Navigation Cards with Responsive 2-to-4 Columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-2">
        <Link
          href="/app/investigacion"
          className="p-4 bg-brand-surface border border-brand-border rounded-2xl hover:border-brand-green/50 hover:shadow-md transition-all flex flex-col justify-between shadow-2xs group"
        >
          <div className="w-9 h-9 rounded-xl bg-brand-sage text-brand-green flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Microscope className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main font-outfit group-hover:text-brand-green transition-colors">
              Investigación
            </h2>
            <p className="text-[10px] text-brand-text-muted mt-0.5">Herbolaria & Ciencia</p>
          </div>
        </Link>

        <Link
          href="/app/superalimento"
          className="p-4 bg-brand-surface border border-brand-border rounded-2xl hover:border-brand-green/50 hover:shadow-md transition-all flex flex-col justify-between shadow-2xs group"
        >
          <div className="w-9 h-9 rounded-xl bg-brand-sage text-brand-emerald flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <HeartPulse className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main font-outfit group-hover:text-brand-green transition-colors">
              Superalimento®
            </h2>
            <p className="text-[10px] text-brand-text-muted mt-0.5">Micronutrición Pura</p>
          </div>
        </Link>

        <Link
          href="/app/adaptogenos"
          className="p-4 bg-brand-surface border border-brand-border rounded-2xl hover:border-brand-green/50 hover:shadow-md transition-all flex flex-col justify-between shadow-2xs group"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Sparkles className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main font-outfit group-hover:text-brand-green transition-colors">
              Adaptógenos
            </h2>
            <p className="text-[10px] text-brand-text-muted mt-0.5">Hongos & Botánica</p>
          </div>
        </Link>

        <Link
          href="/pro/vademecum"
          className="p-4 bg-gradient-to-br from-brand-sage to-emerald-100/60 border border-brand-green/30 rounded-2xl hover:border-brand-green hover:shadow-md transition-all flex flex-col justify-between shadow-2xs group"
        >
          <div className="w-9 h-9 rounded-xl bg-brand-emerald text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
            <ShieldCheck className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-emerald font-outfit">Vademécum PRO</h2>
            <p className="text-[10px] text-brand-forest/80 mt-0.5">Fórmulas V2</p>
          </div>
        </Link>
      </div>

      {/* Institutional Highlights */}
      <div className="bg-brand-surface p-5 md:p-6 rounded-3xl border border-brand-border shadow-xs space-y-3.5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green shadow-xs" />
          <h2 className="text-xs font-bold text-brand-forest uppercase tracking-wider font-outfit">
            Pilares del Ecosistema
          </h2>
        </div>
        <p className="text-xs md:text-sm text-brand-text-muted leading-relaxed">
          Viva Consciente integra en un solo marco la investigación botánica de avanzada, la formulación clínica de micronutrición y la divulgación médica orientada al eje intestino-cerebro y la longevidad celular.
        </p>
        <div className="pt-1 flex items-center justify-between text-xs text-brand-green font-bold font-outfit">
          <Link href="/app/viva-consciente" className="inline-flex items-center gap-1.5 hover:text-brand-forest hover:underline">
            <span>Conocer la estructura de la organización</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
