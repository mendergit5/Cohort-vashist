/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          700: "#146eb4",
          800: "#0e4f82"
        }
      }
    },
  },
  plugins: [],
}