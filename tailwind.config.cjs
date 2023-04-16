/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
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
};
