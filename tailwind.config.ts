import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        102: "1.02",
        112: "1.2",
        113: "1.3",
        115: "1.5",
      },
      minHeight: {
        150: "37.5rem",
      },
      height: {
        screen: "100svh",
        17: "4.25rem",
      },
      width: {
        screen: "100svw",
        22: "5.5rem",
      },
      maxWidth: {
        50: "12.5rem",
        100: "25rem",
        105: "26.25rem",
        110: "27.5rem",
        160: "40rem",
      },
      fontSize: {
        xs: ".4437rem",
        sm: ".6687rem",
        md: "1.5rem",
        lg: "2.25rem",
        xl: "3.375rem",
        "2xl": "5.0625rem",
        "3xl": "121.5px",
        "4xl": "11.3938rem",
      },
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      dropShadow: {
        "custom-1": "0px 8px 4px rgba(0, 0, 0, .5)",
      },
    },
  },
  plugins: [],
};
export default config;
