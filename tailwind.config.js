module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1F263E',
      },
      fontFamily: {
        body: ['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
