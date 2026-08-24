import Image from "next/image";

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

export function WhatsAppIcon({ className = "w-5 h-5", size = 48 }: WhatsAppIconProps) {
  return (
    <Image
      src="/icons/icons8-whatsapp-96.png"
      alt="WhatsApp"
      width={size}
      height={size}
      priority
      className={`inline-block object-contain ${className}`}
    />
  );
}

export function WhatsAppSmallIcon({ className = "w-4 h-4", size = 24 }: WhatsAppIconProps) {
  return (
    <Image
      src="/icons/icons8-whatsapp-48.png"
      alt="WhatsApp"
      width={size}
      height={size}
      priority
      className={`inline-block object-contain ${className}`}
    />
  );
}
