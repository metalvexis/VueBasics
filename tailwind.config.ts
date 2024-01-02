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
        cyan: {
          DEFAULT: "#7294c7",
          "50": "#f6f8f9",
          "100": "#e6eff8",
          "200": "#cadbf1",
          "300": "#a0badf",
          "400": "#7294c7",
          "500": "#5a72b1",
          "600": "#4a5798",
          "700": "#3a4277",
          "800": "#292d54",
          "900": "#191d35",
        },
        indigo: {
          DEFAULT: "#a489bb",
          "50": "#f9faf9",
          "100": "#f0eff6",
          "200": "#e0d7ed",
          "300": "#c1b2d6",
          "400": "#a489bb",
          "500": "#8967a2",
          "600": "#714b86",
          "700": "#563866",
          "800": "#3b2746",
          "900": "#23192a",
        },
      },
    },
  },
};
