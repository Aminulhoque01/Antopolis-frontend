import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1336px",
      xxl: "1620px",
    },

    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1336px",
        xxl: "1620px",
      },
    },

    extend: {
      fontFamily: {
        title: ["arial", "arial"],
      },

      colors: {
        primary: "#004BAD",
        secondary: "#F5F9FF",
        primaryBg: "#EBF6FE",
        hoverText: "#dcbb87",
      },

      maxWidth: {
        "5xl": "60rem", 
      },

      animation: {
        marquee: "marquee 5s linear infinite",
      },

      keyframes: {
        marquee: {
            "0%": {
            transform: "translateX(0%)",
          },
           '100%': { transform: 'translateX(50%)' },
        },
      },
    },
  },

  
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
