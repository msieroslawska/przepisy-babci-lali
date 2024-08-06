/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      blur: {
        xs: "1.5px",
      },
      gridTemplateAreas: {
        pageLayout: ["nav", "main", "footer"],
        recipeLayout: ["nav nav", "side main", "footer footer"],
      },
      gridTemplateColumns: {
        recipeLayout: "350px auto",
      },
      gridTemplateRows: {
        pageLayout: "80px auto 80px",
        recipeLayout: "80px auto 80px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@savvywombat/tailwindcss-grid-areas"),
  ],
  daisyui: {
    themes: ["nord"],
    styled: true,
  },
};
