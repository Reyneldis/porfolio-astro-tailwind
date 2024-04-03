/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "280px",
        xxs: "400px",
      },
      colors: {
        context: "var(--content-color)",
      },
    },
  },
  plugins: [],
};
