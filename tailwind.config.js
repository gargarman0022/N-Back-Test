module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '100': '30rem',
      },
      margin: {
        '100': '28rem',
      },
      gridTemplateColumns: {
       '16': 'repeat(16, minmax(0, 1fr))',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus'],
    }
  },
  plugins: [],
}
