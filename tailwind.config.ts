import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Virgo Chic - Green Palette
        oatmeal: "#FDFCF0",
        sage: "#8A9A5B",
        forest: "#2D4C3E",
        moss: "#6B7F4A",
        cream: "#F8F6EE",
        primary: {
          50: "#FDFCF0",
          100: "#F8F6EE",
          200: "#E8E5D9",
          300: "#D4CFC0",
          400: "#8A9A5B",
          500: "#6B7F4A",
          600: "#2D4C3E",
          700: "#2D4C3E",
          800: "#1F3631",
          900: "#152420",
        },
        accent: {
          50: "#F3F5F0",
          100: "#E3E8DC",
          200: "#C8D4B8",
          300: "#B0C5A0",
          400: "#8A9A5B",
          500: "#6B7F4A",
          600: "#5A6D3E",
          700: "#4A5A32",
          800: "#3A4828",
          900: "#2D3E1F",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        organic: "30% 70% 70% 30% / 30% 30% 70% 70%",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "var(--foreground)",
            a: {
              color: "#3B82F6",
              "&:hover": {
                color: "#2563EB",
              },
            },
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
