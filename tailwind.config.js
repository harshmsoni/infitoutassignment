/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        monro: ["Montserrat", "sans-serif"],
        rubi: ["Rubik", "sans-serif"],
      },
      fontWeight: {
        brand: 410,
      },
    },
  },
  plugins: [],
};
