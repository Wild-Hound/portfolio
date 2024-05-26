import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["var(--font-montserrat)"],
        secondary: ["var(--font-monda)"],
        parah: ["var(--font-hind_madurai)"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "retro", "dracula"],
  },
};
export default config;
