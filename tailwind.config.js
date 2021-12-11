const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ejs',
  ],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#ff4d5a',
          dark: '#C93C46'
        },
        gray: {
          DEFAULT: '#222',
          light: '#ddd'
        }
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
