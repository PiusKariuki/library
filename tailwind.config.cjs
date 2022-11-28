/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000B3",
        secondary: "#0000008A",
        info: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
        startLinear: "#fe8a39",
        stopLinear: "#fd3838",
        smoke: "#f9f9fa"
      },
    },
  },
  plugins: [],
};
