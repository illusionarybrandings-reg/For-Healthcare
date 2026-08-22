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
        "forest-green": "#004400",
        "forest-hover": "#032b03",
        "sage-green": "#6ba16a",
        "mint-light": "#ecf7eb",
        "mint-border": "#d1edd1",
        "badge-bg": "#dde6da",
        "cream-bg": "#fffefb",
        "text-dark": "#292524",
        "text-muted": "#636663",
        "accent-red": "#ff2b2c",
        "star-gold": "#fea500",
      },
      fontFamily: {
        serif: ["var(--font-ibm-serif)", "Georgia", "serif"],
        sans: ["var(--font-ibm-sans)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
