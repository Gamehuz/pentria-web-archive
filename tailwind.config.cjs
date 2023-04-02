/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3E2180",
        secondaryColor: "#BF4D01",
        grayColor: "#7E7E7E",
      },
    },
  },
  plugins: [require("daisyui")],
};
