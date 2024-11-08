import type { Config } from "tailwindcss";
import { mtConfig } from "@material-tailwind/react";
import { colors } from "./tailwind.colors";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [mtConfig, typography],
  darkMode: "class",
};
export default config;
