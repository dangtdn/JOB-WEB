import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themePrimary: "rgb(28 175 87/1)!important",
        light: "rgba(248,249,250,1)!important",
        grayLight: "rgb(143 156 169/1)!important",
        themeLight: "rgb(107 114 128/1)!important",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xxxl: "64px",
      },
    },
  },
  plugins: [],
};
export default config;
