/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        udmarugo: ['"FOT-UDMarugo_Large Pr6N U"', "sans-serif"],
      },
      colors: {
        nft: {},
      },
    },
  },
  plugins: [],
};
