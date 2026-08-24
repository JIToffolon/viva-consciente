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
        "brand-forest": "#062E25",
        "brand-emerald": "#0F5B46",
        "brand-green": "#168057",
        "brand-sage": "#E8F3EE",
        "brand-moss": "#2D6A4F",
        "brand-teal": "#0D6D70",
        "brand-gold": "#D97706",
        "brand-cream": "#F2F7F4",
        "brand-surface": "#FFFFFF",
        "brand-surface-tint": "#F7FAF8",
        "brand-border": "#D8E6DF",
        "brand-text-main": "#0D221C",
        "brand-text-muted": "#4B6358",
        // Dark theme specific extensions
        "dark-bg": "#061814",
        "dark-surface": "#0C231D",
        "dark-surface-tint": "#112F28",
        "dark-border": "#194237",
        "dark-text-main": "#E8F5F0",
        "dark-text-muted": "#8BA89C",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
