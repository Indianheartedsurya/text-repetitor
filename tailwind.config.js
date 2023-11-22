/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        customBgColor: 'yellow-800', // Replace with your desired color value
      },
    },
  },
  plugins: [],
}