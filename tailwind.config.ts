import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: "320px",

      smallTablet: "600px",

      tablet: "860px",

      largeTablet: "950px",

      smallLaptop: "1100px",

      laptop: "1350px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1600px",
      // => @media (min-width: 1280px) { ... }
    },

    objectPosition: {
      lowCenter: "50% 30%",
    },

    extend: {
      colors: {
        "clean-space": "#f3f2ed",

        "human-detail": "#e2dbc9",

        "home-coziness": "#b69f80",

        "natural-style": "#53473b",

        "blue-heaven": "",

        "mint": "", 

        "softwood": "",

        "olive": "",

        "sand": "",

        "wheat": "",

        "moonlight": "",

        "rowan": "",

        "custom-black": ""

      },
    },
  },
  plugins: [],
};
export default config;
