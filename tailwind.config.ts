import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx,json}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2.5rem",
        xl: "5rem"
      }
    },
    extend: {
      colors: {
        "hh-midnight": "hsl(205, 35%, 10%)",
        "hh-ink": "hsl(210, 29%, 14%)",
        "hh-cinder": "hsl(210, 22%, 18%)",
        "hh-canvas": "hsl(42, 23%, 92%)",
        "hh-mist": "hsl(40, 30%, 96%)",
        "hh-ember": "hsl(7, 60%, 46%)",
        "hh-brass": "hsl(38, 46%, 57%)"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      borderRadius: {
        xl: "1.75rem",
        "2xl": "2.5rem"
      },
      boxShadow: {
        focus: "0 0 0 2px hsla(38, 46%, 57%, 0.35)",
        elevation: "0 24px 48px rgba(12, 22, 30, 0.25)"
      },
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0.22, 0.61, 0.36, 1)"
      }
    }
  },
  plugins: [animate]
};

export default config;
