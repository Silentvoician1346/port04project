module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'background1': "url('/image/background2.jpg')",
        'bg-premium': "url('/image/premium1.jpg')",
        'bg-level': "url('/image/levels1.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
