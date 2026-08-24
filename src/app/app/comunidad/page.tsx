import { HeroScreenLayout } from "@/components/common/HeroScreenLayout";
import { Users, Instagram, Heart, MessageCircle } from "lucide-react";

export default function ComunidadPage() {
  return (
    <HeroScreenLayout
      badge="Ecosistema Social"
      title="Comunidad Viva Consciente"
      subtitle="Novedades, divulgación sobre hábitos de vida consciente, recetas funcionales y acceso al ecosistema social de la organización."
      ctaText="Seguir en Instagram @vivaconsciente"
      ctaHref="https://instagram.com/vivaconsciente"
      secondaryCtaText="Siguiente paso: Canales de Contacto Directo"
      secondaryCtaHref="/app/contacto"
      heroIcon={<Users className="w-6 h-6 text-emerald-300" />}
    >
      <div className="space-y-3.5">
        <a
          href="https://instagram.com/vivaconsciente"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white rounded-2xl shadow-sm flex items-center justify-between hover:opacity-95 transition-opacity"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold font-outfit">@vivaconsciente</div>
              <div className="text-[11px] text-white/90">Canal oficial de Instagram</div>
            </div>
          </div>
          <span className="text-xs font-bold px-3.5 py-1.5 bg-white text-slate-900 rounded-xl font-outfit">
            Seguir
          </span>
        </a>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Contenido Diario de Valor</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Infografías, explicaciones científicas simples sobre botánica y guías prácticas para optimizar el bienestar.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-dark-surface-tint text-brand-emerald dark:text-emerald-400 flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-brand-text-main dark:text-dark-text-main font-outfit">Interacción & Feedback</h2>
            <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
              Comentarios, preguntas frecuentes y transmisiones en vivo con el equipo de investigación.
            </p>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
