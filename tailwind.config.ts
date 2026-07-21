import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          500: "#2454b8",
          700: "#0A2463",
          800: "#071b4b",
          900: "#041338"
        },
        accent: {
          400: "#f28a43",
          500: "#E86A17",
          600: "#c9530c"
        }
      },
      boxShadow: {
        soft: "0 20px 50px -24px rgba(10,36,99,.28)",
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,.16) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
export default config;
