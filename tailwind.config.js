/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        labanda: {
          blue: '#0066CC',      // Azul principal corporativo
          lightblue: '#4DA6FF', // Azul claro complementario
          dark: '#1A1A1A',      // Gris oscuro neutro
          gray: '#F5F5F5',      // Fondo gris claro
        },
      },
      screens: {
        mobile: '480px',   // Para móviles grandes
        tablet: '768px',   // Para tablets (centrado Hero y botones)
        desktop: '1024px', // A partir de desktop: layout en fila
      },
    },
  },
  plugins: [],
}
