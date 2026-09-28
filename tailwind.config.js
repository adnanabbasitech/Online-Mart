/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Tajawal", "Arial", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f0fdf7",
          100: "#dcfce9",
          500: "#15966b",
          600: "#0f7f5b",
          700: "#0a6549",
          900: "#063c2c"
        }
      }
    }
  },
  plugins: []
};