import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        background: "var(--background)",
        foreground: "var(--foreground)",
        anakiwa: "var(--color-anakiwa)",
        "athens-gray": "var(--color-athens-gray)",
        black: "var(--color-black)",
        "cod-gray": "var(--color-cod-gray)",
        "cod-gray-26": "var(--color-cod-gray-26)",
        "dodger-blue": "var(--color-dodger-blue)",
        downy: "#b5c2ea",         "dune-dark": "var(--color-dune-dark)",
        "dusty-gray": "var(--color-dusty-gray)",
        gallery: "var(--color-gallery)",
        "gray-primary": "var(--color-gray-primary)",
        kobi: "var(--color-kobi)",
        malibu: "var(--color-malibu)",
        masala: "var(--color-masala)",
        "medium-red-violet": "var(--color-medium-red-violet)",
        "mercury-44": "var(--color-mercury-44)",
        shamrock: "var(--color-shamrock)",
        "silver-chalice": "var(--color-silver-chalice)",
        skeptic: "var(--color-skeptic)",
        thunder: "var(--color-thunder)",
        white: "var(--color-white)",
        "white-20": "var(--color-white-20)",
        "white-70": "var(--color-white-70)",
        "yellow-sea": "var(--color-yellow-sea)",
        "orange-primary": "var(--color-orange-primary)",
        rose: "var(--color-rose)",
        "grey-light": "var(--color-grey-light)",
        "azure-light": "var(--color-azure-light)",
        "cyan-light": "var(--color-cyan-light)",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      safelist: [
        {
          pattern: /text-\[.*\]/,
        },
      ],
    },
  },
  plugins: [],
} satisfies Config;