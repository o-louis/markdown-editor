module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        section: "calc(100vh - 60px)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
