import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-teal": "#0E7490",
        "brand-green": "#15803D",
        "brand-gold": "#D97706",
        "brand-cream": "#F8FAF9",
        "brand-surface": "#FFFFFF",
        "brand-text-main": "#1E293B",
        "brand-text-muted": "#64748B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
