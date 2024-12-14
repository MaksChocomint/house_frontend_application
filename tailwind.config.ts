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
      fontFamily: {
        montserrat: "var(--font-montserrat)", 
      },
      colors: {
        "clean-space": "#F3F2ED",

        "human-detail": "#E2DBC9",

        "home-coziness": "#B69F80",

        "natural-style": "#53473B",

        "blue-heaven": "#779DD0",

        "mint": "#64B48E", 

        "softwood": "#345042",

        "olive": "#616741",

        "sand": "#B4AB64",

        "wheat": "#E9DA79",

        "moonlight": "#0B0C57",

        "rowan": "#C15E46",

        "soft-black": "#1D1D1D",

        "honey": "#D9AC59"
      },
    },
  },
  plugins: [],
};
export default config;
