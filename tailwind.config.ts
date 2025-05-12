import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './client/src/pages/**/*.{ts,tsx}',
    './client/src/components/**/*.{ts,tsx}',
    './client/src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#2C3E50",
        secondary: "#E74C3C",
        accent: "#3498DB",
        background: "#F8F9FA",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
