import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ["Lato"],
      serif: ["Besley"],
      mono: ["ui-monospace"],
      display: ["Oswald"],
      body: ["Lato"],
    },
    extend: {
      colors: {
        riptide: {
          DEFAULT: "#83e0db",
          50: "#f1fcfa",
          100: "#d1f6f2",
          200: "#a3ece6",
          300: "#83e0db",
          400: "#3fc2bf",
          500: "#26a6a5",
          600: "#1c8385",
          700: "#1a6a6b",
          800: "#195456",
          900: "#194748",
          950: "#09282a",
        },
        cornflower: {
          DEFAULT: "#7691f6",
          50: "#eef4ff",
          100: "#e0ebff",
          200: "#c8d8fd",
          300: "#a6bffb",
          400: "#7691f6",
          500: "#6478f0",
          600: "#4852e3",
          700: "#393fc9",
          800: "#3137a2",
          900: "#2f3680",
          950: "#1b1e4b",
        },
        blueviolet: {
          DEFAULT: "#524bf3",
          50: "#edf1ff",
          100: "#dee6ff",
          200: "#c3d0ff",
          300: "#9eb0ff",
          400: "#7786ff",
          500: "#585dfc",
          600: "#524bf3",
          700: "#362cd6",
          800: "#2d27ac",
          900: "#2a2788",
          950: "#1a174f",
        },
      },
    },
  },
};
