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
        dark3: ["#131313B3"],
        dark4: ["#13131399"],
        lightBlack: ["#FFFFFFB3"],
        lightBlack2: ["#FFFFFF99"],
        btnBg: ["#E7FE29"],
        footerBg: ["#06091A"],
      },
    },
  },
  plugins: [require("daisyui")],
};
