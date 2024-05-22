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
              50: "#FFE6E5",
              100: "#FFBFBF",
              200: "#FF9999",
              300: "#FF7373",
              400: "#FF4D4D",
              500: "#FF2727",
              600: "#E52323",
              700: "#CC1F1F",
              800: "#B21B1B",
              900: "#991717",
              DEFAULT: "#FF2727",
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
              50: "#991717",
              100: "#B21B1B",
              200: "#CC1F1F",
              300: "#E52323",
              400: "#FF2727",
              500: "#FF4D4D",
              600: "#FF7373",
              700: "#FF9999",
              800: "#FFBFBF",
              900: "#FFE6E5",
              DEFAULT: "#FF4D4D",
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
