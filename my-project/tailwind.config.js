/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primario: "#f42c37",
        secundario: "#f42c37",
        amarillo: "#fdc62e",
        verde: "#2dcc6f",
        azul: "#1376f4",
        blanco: "#eeeeee",
      },
      container: {
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
        },
      }
    },
  },
  plugins: [],
}