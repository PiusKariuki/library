/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        smoke: "#f9f9fa",
        coal: "#17171b",
        lime: "#5ba745",
        fade: "#f6f3f3",
      },
    },
  },
  plugins: [],
};
