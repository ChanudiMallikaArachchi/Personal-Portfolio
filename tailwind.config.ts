import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./registry/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        bg: "var(--bg-dark)",
        panel: "var(--surface-dark)",
        card: "var(--surface-card)",
        border: "var(--border-muted)",

        brand: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          DEFAULT: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },

        accent: {
          peach: "var(--accent-peach)",
          champagne: "var(--accent-champagne)",
          rose: "var(--accent-rose)",
          bronze: "var(--accent-bronze)",
        },

        text: {
          primary: "var(--text-heading)",
          secondary: "var(--text-body)",
          muted: "var(--text-muted)",
        },
      },

      fontFamily: {
        primary: ["var(--font-primary)", "Plus Jakarta Sans", "sans-serif"],
        secondary: ["var(--font-secondary)", "Google Sans Flex", "sans-serif"],
        sans: ["var(--font-primary)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      screens: {
        xs: "475px",
        "3xl": "1920px",
      },

      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },

      boxShadow: {
        subtle: "0 4px 10px rgba(0,0,0,0.15)",
        card: "0 10px 30px oklch(0.10 0.015 10 / 0.8)",
        glow: "0 0 25px oklch(0.77 0.07 10 / 0.4)",
      },

      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 5s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s infinite ease-in-out",
        slideUp: "slideUp 0.6s ease-out forwards",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },

  plugins: [],
};

export default config;
