import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/common/Header";
import { SidebarNav } from "@/components/common/SidebarNav";
import { BottomNav } from "@/components/common/BottomNav";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { ThemeProvider } from "@/components/common/ThemeProvider";

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
  themeColor: "#0F5B46",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-brand-cream dark:bg-dark-bg text-brand-text-main dark:text-dark-text-main antialiased selection:bg-brand-green selection:text-white flex transition-colors duration-200">
        <ThemeProvider>
          {/* Sidebar Navigation for Tablet & Desktop */}
          <SidebarNav />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-h-screen relative w-full overflow-x-hidden">
            <div className="md:hidden">
              <Header />
            </div>
            <main className="flex-1 w-full max-w-md md:max-w-3xl lg:max-w-5xl mx-auto p-4 sm:p-6 md:p-8 pb-24 md:pb-12">
              {children}
            </main>
            <FloatingWhatsApp />
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
