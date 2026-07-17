/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#f8f3ed', ink: '#292321', rose: '#a56b68', blush: '#ead5d0', champagne: '#c8a97e'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], display: ['Italiana', 'serif'], script: ['Newsreader', 'serif']
      },
      boxShadow: { soft: '0 24px 70px rgba(86, 61, 51, .12)' }
    }
  },
  plugins: []
}
