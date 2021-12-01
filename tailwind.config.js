const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.html'
  ],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          light: '#607c28',
          DEFAULT: '#4f6521',
          dark: '#2d3b14'
        }
      },
      fontFamily: {
        'futura': ['Futura', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
