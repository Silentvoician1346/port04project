module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'background1': "url('/image/background2.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
