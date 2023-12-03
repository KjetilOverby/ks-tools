import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: 'class',
  
  daisyui: {
    themes: [
        {
        mytheme: {
          "primary": "#254e58",
          "secondary": "#379683",
          "accent": "#6e6658",
          "neutral": "#88bdbc",
          "base-100": "#112d32",
        },
        bluefresh: {
          "primary": "#2e9cca",
          "secondary": "#464866",
          "accent": "#aaabbb",
          "neutral": "#29648a",
          "base-100": "#25274d",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },

  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  
  plugins: [require("daisyui")],
  
  
} satisfies Config;

