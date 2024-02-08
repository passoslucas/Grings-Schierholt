/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      color1: "#e4b44c",
      color2: "#edce8b",
      color3: "#55451b",
      color4: "#7c7c7c",
      color5: "#b4b4b4",
      color6: "#1C1E23",
      navbar_font: "#FCFCFC",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    fontSize: {
      navbarMed: "16px",
      title: "36px",
      body: "14px",
    },
    extend: {},
  },
  plugins: [],
};
