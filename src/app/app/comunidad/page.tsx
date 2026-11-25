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
      <div className="space-y-4">
        <a
          href="https://instagram.com/vivaconsciente"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-brand-surface dark:bg-dark-surface border border-brand-border dark:border-dark-border border-l-4 border-l-brand-teal rounded-xl shadow-sm flex items-center justify-between gap-4 hover:border-brand-teal transition-colors"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-300 flex items-center justify-center shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                @vivaconsciente
              </div>
              <div className="text-xs text-brand-text-muted dark:text-dark-text-muted">
                Canal oficial de Instagram
              </div>
            </div>
          </div>
          <span className="text-xs font-semibold px-3.5 py-2 bg-brand-teal text-white rounded-lg font-outfit shrink-0">
            Seguir
          </span>
        </a>

        <div className="bg-brand-surface dark:bg-dark-surface rounded-xl border border-brand-border dark:border-dark-border divide-y divide-brand-border dark:divide-dark-border shadow-sm">
          <div className="p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Contenido Diario de Valor
              </h2>
              <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
                Infografías, explicaciones científicas simples sobre botánica y guías prácticas para optimizar el bienestar.
              </p>
            </div>
          </div>

          <div className="p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-400 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Interacción & Feedback
              </h2>
              <p className="text-sm text-brand-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
                Comentarios, preguntas frecuentes y transmisiones en vivo con el equipo de investigación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </HeroScreenLayout>
  );
}
