"use client";

import { MessageCircle } from "lucide-react";

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
      className="fixed bottom-20 right-4 z-40 flex items-center justify-center w-13 h-13 p-3.5 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
    </a>
  );
}
