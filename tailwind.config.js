/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sora: ["Sora", "sans-serif"],
        Inter: ["Inter", "serif"],
      },
      colors: {
        dark1: ["#131313"],
        dark2: ["#040D11"],
        gray1: ["#131313B3"],
        gray2: ["#13131399"],
        lightBlack: ["#FFFFFFB3"],
        lightBlack2: ["#FFFFFF99"],
        btnBg: ["#E7FE29"],
        footerBg: ["#121F5E"],
      },
    },
  },
  plugins: [require("daisyui")],
};
