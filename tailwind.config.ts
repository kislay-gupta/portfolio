import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#EEE8ED",
        "Blue-ExtraLight": "#B0E7FC",
        "Blue-Light": "#89DAFB",
        "Blue-Primary": "#56CBF9",
        "Blue-Darker": "#26BCF7",
        "Turquoise-ExtraLight": "#B4F8ED",
        "Turquoise-Light": "#81F4E1",
        "Turquoise-Primary": "#69F2DB",
        "Turquoise-Darker": "#1FEAC8",
        "Pink-ExtraLight": "#FFC2D5",
        "Pink-Light": "#FF99B9",
        "Pink-Primary": "#FF729F",
        "Pink-Darker": "#FF3374",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Raleway", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
