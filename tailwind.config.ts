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
        "custom-gradient":
          "linear-gradient(90deg, #B0ADAD4D 30%, #08080880 50%)",
        "modal-gradient": "linear-gradient(90deg, #E4F1FC 0%, #FFFFFF 100%)",
      },
      colors: {
        primary: "#2599F6",
        grey_10: "#ECEEFB",
        grey_20: "#FAFAFA",
        grey_30: "#707072",
        grey_100: "#D3D5E0",
        grey_200: "#BDBFC9",
        grey_400: "#8D8E96",
        grey_500: "#6F7076",
        grey_600: "#F3F4FC",
        grey_700: "#414245",
        grey_800: "#2A2A2D",
        grey_900: "#131314",
        blue_100: "#F7FAFC",
        blue_200: "#E4F1FC",
        blue_300: "#E0E2EE80",
        blue_500: "#2599F6",
        green_100: "#1CF417",
        red_100: "#FC0404",
      },

      boxShadow: {
        custom: "0px 2px 1px 0px #00000040;",
        auth: "0px 4px 4px 0px #B7B5B540",
        "header-md":
          "inset 0px 4px 4px 0px #ECEEFB, inset 0px 2px 1px 0px #FFFFFF29, 0px 4px 4px 0px #ECEEFB",
        triple:
          "3px 3px 5px 0px rgba(224, 226, 238, 0.5), 0px 0px 0px 1px rgba(239, 245, 239, 0.5), -3px -1px 5px 0px rgba(224, 226, 238, 0.5)",
      },
      dropShadow: {
        "3xl": "0 4px 4px 0 rgba(183, 181, 181, 0.25)",
        "4xl": "0 4px 4px 0 rgba(236, 238, 251, 1)",
        "5xl": "0px 1px 1px 0px rgba(1, 18, 32, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
// box-shadow: 0px 2px 0px 0px #FFFFFF29 inset;
