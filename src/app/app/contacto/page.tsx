import { ShieldCheck, ShoppingBag, Instagram, Mail, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

export default function ContactoPage() {
  const whatsappProUrl = `https://wa.me/5491100000000?text=${encodeURIComponent(
    "Hola Viva Consciente, soy profesional de la salud y deseo consultar sobre vademécum, formulaciones e investigación."
  )}`;

  const whatsappGeneralUrl = `https://wa.me/5491100000000?text=${encodeURIComponent(
    "Hola Viva Consciente, deseo realizar una consulta general sobre productos, disponibilidad y envíos."
  )}`;

  const emailAlianzasUrl = "mailto:alianzas@vivaconsciente.com?subject=Propuesta%20Institucional%20o%20Alianza";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-xl bg-brand-forest dark:bg-[#051B16] p-6 md:p-8 text-white border border-emerald-900/50 dark:border-dark-border">
        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-100 border border-white/20">
          Canales Oficiales
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-white mt-3 leading-tight font-outfit">
          Conectar con Viva Consciente
        </h1>
        <p className="text-sm md:text-base text-emerald-50/90 mt-2 leading-relaxed max-w-2xl">
          Seleccione el canal adecuado para derivación profesional, consultas comerciales, alianzas institucionales o seguimiento en redes.
        </p>
      </div>

      {/* 4 Direct Channel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Canal 1: Derivación Profesional */}
        <a
          href={whatsappProUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 p-5 bg-brand-surface dark:bg-dark-surface border border-brand-border dark:border-dark-border hover:border-brand-teal dark:hover:border-teal-500 rounded-xl shadow-sm transition-colors group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                  Área Médica & Profesionales
                </h2>
                <span className="text-xs font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-900 dark:text-amber-300 px-1.5 py-0.5 rounded">
                  PRO
                </span>
              </div>
              <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-0.5">
                Fichas técnicas, dossier clínico y asesoramiento
              </p>
            </div>
          </div>
          <div className="p-2 bg-[#25D366] text-white rounded-lg shrink-0">
            <WhatsAppIcon className="w-4 h-4" />
          </div>
        </a>

        {/* Canal 2: Atención General */}
        <a
          href={whatsappGeneralUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 p-5 bg-brand-surface dark:bg-dark-surface border border-brand-border dark:border-dark-border hover:border-brand-teal dark:hover:border-teal-500 rounded-xl shadow-sm transition-colors group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Atención General & Productos
              </h2>
              <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-0.5">
                Disponibilidad, formas de consumo y entregas
              </p>
            </div>
          </div>
          <div className="p-2 bg-[#25D366] text-white rounded-lg shrink-0">
            <WhatsAppIcon className="w-4 h-4" />
          </div>
        </a>

        {/* Canal 3: Instagram Oficial */}
        <a
          href="https://instagram.com/vivaconsciente"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 p-5 bg-brand-surface dark:bg-dark-surface border border-brand-border dark:border-dark-border hover:border-brand-teal dark:hover:border-teal-500 rounded-xl shadow-sm transition-colors group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-brand-surface-tint dark:bg-dark-surface-tint text-brand-text-main dark:text-dark-text-main border border-brand-border dark:border-dark-border flex items-center justify-center shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Comunidad en Instagram
              </h2>
              <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-0.5">
                @vivaconsciente — Novedades y divulgación
              </p>
            </div>
          </div>
          <span className="px-3 py-1.5 bg-brand-teal text-white rounded-lg text-xs font-semibold font-outfit shrink-0">
            Visitar
          </span>
        </a>

        {/* Canal 4: Eventos y Alianzas */}
        <a
          href={emailAlianzasUrl}
          className="flex items-center justify-between gap-3 p-5 bg-brand-surface dark:bg-dark-surface border border-brand-border dark:border-dark-border hover:border-brand-teal dark:hover:border-teal-500 rounded-xl shadow-sm transition-colors group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-brand-surface-tint dark:bg-dark-surface-tint text-brand-text-muted dark:text-dark-text-muted border border-brand-border dark:border-dark-border flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
                Alianzas Institucionales & Forum
              </h2>
              <p className="text-xs text-brand-text-muted dark:text-dark-text-muted mt-0.5">
                alianzas@vivaconsciente.com
              </p>
            </div>
          </div>
          <span className="px-3 py-1.5 bg-brand-sage dark:bg-dark-surface-tint text-brand-teal dark:text-teal-300 rounded-lg text-xs font-semibold font-outfit shrink-0 border border-brand-border dark:border-dark-border">
            Escribir
          </span>
        </a>
      </div>

      {/* Operation Times & Care */}
      <div className="bg-brand-surface dark:bg-dark-surface p-5 rounded-xl border border-brand-border dark:border-dark-border text-sm text-brand-text-muted dark:text-dark-text-muted space-y-2 shadow-sm">
        <div className="flex items-center gap-2 font-bold text-brand-text-main dark:text-dark-text-main font-outfit">
          <Clock className="w-4 h-4 text-brand-teal dark:text-teal-400" />
          <span>Horario de Atención Profesional</span>
        </div>
        <p className="text-sm text-brand-text-muted dark:text-dark-text-muted">
          Lunes a Viernes de 09:00 a 18:00 hs (GMT-3).
        </p>
        <p className="text-xs text-brand-text-muted dark:text-dark-text-muted pt-2 border-t border-brand-border dark:border-dark-border">
          Respuestas en menos de 24 horas hábiles por equipo calificado.
        </p>
      </div>
    </div>
  );
}
