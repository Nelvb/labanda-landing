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
          blue: '#0066CC',
          lightblue: '#4DA6FF',
          dark: '#1A1A1A',
          gray: '#F5F5F5',
        }
      },
    },
  },
  plugins: [],
}