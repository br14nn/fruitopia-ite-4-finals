import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        17: "4.25rem",
      },
      width: {
        22: "5.5rem",
      },
      maxWidth: {
        50: "12.5rem",
        100: "25rem",
        105: "26.25rem",
        110: "27.5rem",
        160: "40rem",
      },
      colors: {
        "primary-color": "#FFFFFF",
        "secondary-color": "#583296",
        "accent-color": "#498E29",
        "accent-color-110": "#5AA238",
        "dark-color": "#0F2405",
      },
      fontSize: {
        xs: ".6rem",
        sm: ".8rem",
        md: "1.3rem",
        lg: "1.6rem",
        xl: "2rem",
        "2xl": "2.4rem",
        "3xl": "3.1rem",
        "4xl": "3.8rem",
        "5xl": "4.8rem",
        "6xl": "5.9rem",
        "7xl": "7.4rem",
        "8xl": "9.3rem",
        "9xl": "11.6rem",
        "10xl": "14.5rem",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
