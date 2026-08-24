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
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-forest via-brand-emerald to-[#0A3F32] p-6 md:p-8 text-white shadow-lg border border-emerald-800/40">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-emerald-200 border border-white/25">
          Canales Oficiales
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mt-3 leading-tight font-outfit">
          Conectar con Viva Consciente
        </h1>
        <p className="text-xs md:text-sm text-emerald-50/90 mt-2 leading-relaxed max-w-xl">
          Seleccione el canal adecuado para derivación profesional, consultas comerciales, alianzas institucionales o seguimiento en redes.
        </p>
      </div>

      {/* 4 Direct Channel Cards (Responsive 1-to-2 Column Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* Canal 1: Derivación Profesional */}
        <a
          href={whatsappProUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 md:p-5 bg-brand-surface border border-brand-border hover:border-brand-green rounded-3xl shadow-2xs hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-brand-sage text-brand-green flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-xs font-bold text-brand-text-main font-outfit">
                  Área Médica & Profesionales
                </h2>
                <span className="text-[9px] font-bold bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded-md">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-brand-text-muted mt-0.5">
                Fichas técnicas, dossier clínico y asesoramiento técnico
              </p>
            </div>
          </div>
          <div className="p-2.5 bg-[#25D366] text-white rounded-full shrink-0 shadow-xs group-hover:scale-110 transition-transform">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
        </a>

        {/* Canal 2: Productos y Asesoramiento General */}
        <a
          href={whatsappGeneralUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 md:p-5 bg-brand-surface border border-brand-border hover:border-brand-green rounded-3xl shadow-2xs hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-brand-emerald flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-brand-text-main font-outfit">
                Atención General & Productos
              </h2>
              <p className="text-[11px] text-brand-text-muted mt-0.5">
                Disponibilidad, formas de consumo y puntos de entrega
              </p>
            </div>
          </div>
          <div className="p-2.5 bg-[#25D366] text-white rounded-full shrink-0 shadow-xs group-hover:scale-110 transition-transform">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
        </a>

        {/* Canal 3: Instagram Oficial */}
        <a
          href="https://instagram.com/vivaconsciente"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 md:p-5 bg-brand-surface border border-brand-border hover:border-pink-400 rounded-3xl shadow-2xs hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-brand-text-main font-outfit">
                Comunidad en Instagram
              </h2>
              <p className="text-[11px] text-brand-text-muted mt-0.5">
                @vivaconsciente — Novedades y divulgación
              </p>
            </div>
          </div>
          <div className="px-3.5 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-xs font-bold font-outfit shrink-0">
            Visitar
          </div>
        </a>

        {/* Canal 4: Eventos y Alianzas */}
        <a
          href={emailAlianzasUrl}
          className="flex items-center justify-between p-4 md:p-5 bg-brand-surface border border-brand-border hover:border-brand-green rounded-3xl shadow-2xs hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-brand-text-main font-outfit">
                Alianzas Institucionales & Forum
              </h2>
              <p className="text-[11px] text-brand-text-muted mt-0.5">
                alianzas@vivaconsciente.com
              </p>
            </div>
          </div>
          <div className="px-3.5 py-1.5 bg-brand-sage text-brand-emerald rounded-xl text-xs font-bold font-outfit shrink-0">
            Escribir
          </div>
        </a>
      </div>

      {/* Operation Times & Care */}
      <div className="bg-brand-surface p-5 rounded-3xl border border-brand-border text-xs text-brand-text-muted space-y-2 shadow-2xs">
        <div className="flex items-center gap-2 font-bold text-brand-forest font-outfit">
          <Clock className="w-4 h-4 text-brand-green" />
          <span>Horario de Atención Profesional:</span>
        </div>
        <p className="text-[11px] text-brand-text-muted">Lunes a Viernes de 09:00 a 18:00 hs (GMT-3).</p>
        <p className="text-[10px] text-brand-text-muted/80 pt-1.5 border-t border-brand-border">
          Respuestas en menos de 24 horas hábiles por equipo calificado.
        </p>
      </div>
    </div>
  );
}
