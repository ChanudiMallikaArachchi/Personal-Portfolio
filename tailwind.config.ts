import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        bg: "#09090b",
        panel: "#18181b",
        border: "#27272a",

        accent: {
          DEFAULT: "#3b82f6",
          secondary: "#8b5cf6",
          success: "#22c55e",
          warning: "#f59e0b",
        },

        text: {
          primary: "#fafafa",
          secondary: "#d4d4d8",
          muted: "#71717a",
        },
      },

      backgroundImage: {
        hero: "linear-gradient(to right, #3b82f6, #8b5cf6)",
        mesh:
          "radial-gradient(circle at top left, rgba(59,130,246,0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(139,92,246,0.15), transparent 40%)",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
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
        card: "0 10px 30px rgba(0,0,0,0.25)",
        glow: "0 0 25px rgba(59,130,246,0.35)",
      },

      backdropBlur: {
        xs: "2px",
      },

      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 2s infinite",
        slideUp: "slideUp 0.6s ease-out forwards",
      },

      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(59,130,246,0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(59,130,246,0.7)",
          },
        },
      },
    },
  },

  plugins: [],
};

export default config;
