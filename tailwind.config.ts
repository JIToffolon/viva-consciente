import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-forest": "#0F3D2E",
        "brand-emerald": "#155E4B",
        "brand-green": "#15803D",
        "brand-sage": "#EAF2EE",
        "brand-moss": "#2D6A4F",
        "brand-teal": "#0E7490",
        "brand-gold": "#B45309",
        "brand-cream": "#F8FAF9",
        "brand-surface": "#FFFFFF",
        "brand-surface-tint": "#F3F7F5",
        "brand-border": "#DCE5E0",
        "brand-text-main": "#1E293B",
        "brand-text-muted": "#475569",
        // Dark theme specific extensions
        "dark-bg": "#081713",
        "dark-surface": "#0E221D",
        "dark-surface-tint": "#142D26",
        "dark-border": "#1F4238",
        "dark-text-main": "#E8F2EE",
        "dark-text-muted": "#94B0A6",
      },
      fontFamily: {
        outfit: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
