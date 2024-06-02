import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#2599F6",
        grey_200: "#BDBFC9",
        grey_500: "#6F7076",
        grey_900: "#131314",
        blue_500: "#2599F6",
      },
      boxShadow: {
        custom: "0px 2px 1px 0px #00000040;",
        auth: "0px 4px 4px 0px #B7B5B540",
      },
      dropShadow: {
        "3xl": "0 4px 4px 0 rgba(183, 181, 181, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
