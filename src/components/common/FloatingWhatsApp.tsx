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
      className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 flex items-center justify-center p-0 bg-transparent hover:scale-110 active:scale-95 transition-transform duration-200"
    >
      <WhatsAppIcon className="w-12 h-12 md:w-14 md:h-14 drop-shadow-md" size={96} />
    </a>
  );
}
