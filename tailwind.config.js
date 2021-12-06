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
        },
        red: {
          DEFAULT: '#ff4d5a',
          dark: '#C93C46'
        },
        gray: '#222'
      },
      fontFamily: {
        'futura': ['Futura', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {
      filter: ['hover']
    },
  },
  plugins: [],
}
