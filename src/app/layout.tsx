import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/common/Header";
import { BottomNav } from "@/components/common/BottomNav";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Viva Consciente — Ecosistema de Salud Celular & Biológica",
  description:
    "Organización científica y botánica orientada a la investigación, micronutrición funcional, adaptógenos y longevidad celular.",
  keywords: [
    "Viva Consciente",
    "Micronutrición Funcional",
    "Adaptógenos",
    "Melena de León",
    "Ashwagandha",
    "Longevidad",
    "Vademécum Profesional",
  ],
  authors: [{ name: "Viva Consciente" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0E7490",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-100 text-brand-text-main antialiased selection:bg-brand-teal selection:text-white flex justify-center">
        {/* Contenedor Mobile Centrado */}
        <div className="w-full max-w-md min-h-screen bg-brand-cream border-x border-slate-200/80 shadow-2xl flex flex-col relative pb-20">
          <Header />
          <main className="flex-1 p-4">{children}</main>
          <FloatingWhatsApp />
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
