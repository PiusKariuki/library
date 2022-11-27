/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17171b",
        secondary: "#f9f9fa",
        info: "#5ba745",
        tertiary: "#f6f3f3"
      },
    },
  },
  plugins: [],
};
