import { Phone, ShieldCheck, ShoppingBag, Instagram, Mail, MessageCircle, Clock, MapPin } from "lucide-react";

export default function ContactoPage() {
  const whatsappProUrl = `https://wa.me/5491100000000?text=${encodeURIComponent(
    "Hola Viva Consciente, soy profesional de la salud y deseo consultar sobre vademécum, formulaciones e investigación."
  )}`;

  const whatsappGeneralUrl = `https://wa.me/5491100000000?text=${encodeURIComponent(
    "Hola Viva Consciente, deseo realizar una consulta general sobre productos, disponibilidad y envíos."
  )}`;

  const emailAlianzasUrl = "mailto:alianzas@vivaconsciente.com?subject=Propuesta%20Institucional%20o%20Alianza";

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-900 via-emerald-950 to-slate-900 p-5 text-white shadow-md">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-emerald-200 border border-white/20">
          Canales Oficiales
        </span>
        <h1 className="text-2xl font-bold text-white mt-2 leading-tight">
          Conectar con Viva Consciente
        </h1>
        <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
          Seleccione el canal adecuado para derivación profesional, consultas comerciales, alianzas institucionales o seguimiento en redes.
        </p>
      </div>

      {/* 4 Direct Channel Cards */}
      <div className="space-y-3">
        {/* Canal 1: Derivación Profesional */}
        <a
          href={whatsappProUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-brand-surface border border-teal-200 hover:border-brand-teal rounded-2xl shadow-xs transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-xs font-bold text-brand-text-main">
                  Área Médica & Profesionales
                </h2>
                <span className="text-[9px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-brand-text-muted mt-0.5">
                Fichas técnicas, dossier clínico y asesoramiento técnico
              </p>
            </div>
          </div>
          <div className="p-2 bg-[#25D366] text-white rounded-full shrink-0 shadow-xs">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
        </a>

        {/* Canal 2: Productos y Asesoramiento General */}
        <a
          href={whatsappGeneralUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-brand-surface border border-slate-200 hover:border-emerald-500 rounded-2xl shadow-xs transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-green flex items-center justify-center group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-brand-text-main">
                Atención General & Productos
              </h2>
              <p className="text-[11px] text-brand-text-muted mt-0.5">
                Disponibilidad, formas de consumo y puntos de entrega
              </p>
            </div>
          </div>
          <div className="p-2 bg-[#25D366] text-white rounded-full shrink-0 shadow-xs">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
        </a>

        {/* Canal 3: Instagram Oficial */}
        <a
          href="https://instagram.com/vivaconsciente"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-brand-surface border border-slate-200 hover:border-pink-500 rounded-2xl shadow-xs transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-brand-text-main">
                Comunidad en Instagram
              </h2>
              <p className="text-[11px] text-brand-text-muted mt-0.5">
                @vivaconsciente — Novedades y divulgación
              </p>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-xs font-semibold shrink-0">
            Visitar
          </div>
        </a>

        {/* Canal 4: Eventos y Alianzas */}
        <a
          href={emailAlianzasUrl}
          className="flex items-center justify-between p-4 bg-brand-surface border border-slate-200 hover:border-brand-teal rounded-2xl shadow-xs transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-brand-text-main">
                Alianzas Institucionales & Forum
              </h2>
              <p className="text-[11px] text-brand-text-muted mt-0.5">
                alianzas@vivaconsciente.com
              </p>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold shrink-0">
            Escribir
          </div>
        </a>
      </div>

      {/* Operation Times & Care */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-brand-text-muted space-y-1.5">
        <div className="flex items-center gap-1.5 font-semibold text-brand-text-main">
          <Clock className="w-3.5 h-3.5 text-brand-teal" />
          <span>Horario de Atención Profesional:</span>
        </div>
        <p className="text-[11px]">Lunes a Viernes de 09:00 a 18:00 hs (GMT-3).</p>
        <p className="text-[10px] text-slate-400 pt-1 border-t border-slate-200">
          Respuestas en menos de 24 horas hábiles por equipo calificado.
        </p>
      </div>
    </div>
  );
}
