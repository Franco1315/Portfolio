/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#097D74", 
        secondary: "#F5A101",
        text: "#202020"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Agregamos Poppins como fuente personalizada
      },
    },
  },
  plugins: [],
}

