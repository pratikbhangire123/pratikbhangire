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
        grayishblack: "#606060",
        grayishwhite: "#D9D9D9",
        lightgray: "#E5E5E5",
        lightergray: "#F5F5F5",

        //primary

        almostblack: "#111111",
        lightgray: "#999999",
        almostwhite: "#eeeeee",
        darkwhite: "#cccccc",
        shadedwhite: "#dddddd",
      },
    },
  },
  plugins: [],
};
