/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3E1992",
        secondaryColor: "#BF4D01",
        grayColor: "#7E7E7E",
      },
    },
  },
};
