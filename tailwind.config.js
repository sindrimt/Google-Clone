module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blackIsh: "#151515",
        darkPurple: "#301B3F",
        darkBlue: "#3C415C",
        whiteIsh: "#B4A5A5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
