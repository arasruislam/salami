/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eid: {
          emerald: "#023D33",
          "emerald-light": "#065F52",
          midnight: "#000F0D",
          gold: "#D4AF37",
          "gold-light": "#F3D060",
          "gold-dark": "#8a6d1d",
          mint: "#34D399",
          text: "#F3F4F6",
          "text-muted": "#9CA3AF",
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: { "background-position": "200% 0" },
          to: { "background-position": "-200% 0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
