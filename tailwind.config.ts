import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#F9FAFB",
            foreground: "#11181C",
            primary: {
              50: "#E6FFF2",
              100: "#AEEBD4",
              200: "#86DAB7",
              300: "#5EC99A",
              400: "#36B87D",
              500: "#0EA760",
              600: "#0C9154",
              700: "#087B48",
              800: "#04653C",
              900: "#004F30",
              DEFAULT: "#0EA760",
              foreground: "#000000",
            },
            secondary: {
              50: "#FFEBE6",
              100: "#FFC1B2",
              200: "#FF9980",
              300: "#FF704D",
              400: "#FF471A",
              500: "#FF2200",
              600: "#DB1E00",
              700: "#B71B00",
              800: "#931700",
              900: "#700F00",
              DEFAULT: "#FF471A",
              foreground: "#000000",
            },
          },
        },
        dark: {
          colors: {
            background: "#18181B",
            foreground: "#ECEDEE",
            primary: {
              50: "#004F30",
              100: "#04653C",
              200: "#087B48",
              300: "#0C9154",
              400: "#0EA760",
              500: "#36B87D",
              600: "#5EC99A",
              700: "#86DAB7",
              800: "#AEEBD4",
              900: "#E6FFF2",
              DEFAULT: "#36B87D",
              foreground: "#FFFFFF",
            },
            secondary: {
              50: "#700F00",
              100: "#931700",
              200: "#B71B00",
              300: "#DB1E00",
              400: "#FF2200",
              500: "#FF471A",
              600: "#FF704D",
              700: "#FF9980",
              800: "#FFC1B2",
              900: "#FFEBE6",
              DEFAULT: "#FF704D",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};
export default config;
