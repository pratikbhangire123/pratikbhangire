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
        // Primary
        colorPrimary: "#1A1A1A",
        colorPrimaryLight: "#4A4A4A",

        // Secondary
        colorSecondary: "#E0E0E0",
        colorSecondaryLight: "#C7C7C7",
        colorSecondaryLighter: "#B0B0B0",

        // Accent
        colorAccent: "#ff5c00", //#ff5c00 or #2323ff

        // Neutral
        colorNeutral: "#787878",
        colorNeutralLight: "#CBCBCB",
        colorNeutralLighter: "#E2E2E2",
        colorNeutralLightest: "#F7F7F7",
      },

      backgroundImage: {
        vignette:
          "radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 40%, rgba(26, 26, 26, 0.7) 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-thin": {
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(128, 128, 128, 0.3)",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "rgba(128, 128, 128, 0.5)",
          },
          "scrollbar-width": "thin",
          "scrollbar-color": "rgba(128, 128, 128, 0.3) transparent",
        },

        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
