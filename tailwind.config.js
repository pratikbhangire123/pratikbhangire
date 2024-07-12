/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary
        colorPrimary: "#111111",
        colorPrimaryLight: "#606060",

        //secondary
        colorSecondary: "#eeeeee",
        colorSecondaryLight: "#dddddd",
        colorSecondaryLighter: "#cccccc",

        //neutral
        colorNeutral: "#999999",
        colorNeutralLight: "#d9d9d9",
        colorNeutralLighter: "#e5e5e5",
        colorNeutralLightest: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
