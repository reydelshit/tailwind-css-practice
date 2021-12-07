module.exports = {
  purge: ['public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      }
    },
    fontFamily: {
      benPoppins: ['Poppins']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
