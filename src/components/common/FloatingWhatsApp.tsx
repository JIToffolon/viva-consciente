"use client";

import { WhatsAppIcon } from "./WhatsAppIcon";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export function FloatingWhatsApp({
  phoneNumber = "5491100000000",
  defaultMessage = "Hola Viva Consciente, deseo realizar una consulta sobre el ecosistema y productos.",
}: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 flex items-center justify-center w-14 h-14 p-2 bg-[#25D366] text-white rounded-full shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-200"
    >
      <WhatsAppIcon className="w-10 h-10" />
    </a>
  );
}
