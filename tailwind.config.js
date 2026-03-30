/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Replace 'sans' with 'serif' or just update the sans stack if you want it everywhere
        serif: ['EB Garamond', 'Garamond', 'Georgia', 'serif'],
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Keep this for UI elements like buttons
      },
      colors: {
        // Backgrounds: Cream/Beige
        primary: '#F5F5DC',      // Classic Cream
        secondary: '#F2E8CF',    // Slightly deeper beige for contrast
        tertiary: '#EAD7BB',     // Accent beige
        
        // Typography & Accents: Plum/Dark Pink
        text: '#4A0E2E',           // Deep Plum for readability
        'text-secondary': '#833857', // Muted Plum/Dark Pink
        'text-tertiary': '#AC4B74',  // Dark Pink
        
        border: '#D4A5B7',       // Soft Dusty Pink for borders
        accent: '#673147',       // Strong Plum for buttons/important UI
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
