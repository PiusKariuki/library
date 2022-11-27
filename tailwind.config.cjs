/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#17171b",
        primary: "#000000B3",
        // secondary: "#f9f9fa",
        secondary: "#0000008A",
        // info: "#5ba745",
        info: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
        tertiary: "#f9f9fa",
        smoke: "#f9f9fa"
      },
    },
  },
  plugins: [],
};
