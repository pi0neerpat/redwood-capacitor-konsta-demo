const konstaConfig = require('konsta/config')

module.exports = konstaConfig({
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 'page-ios-light': '#fff',
        // 'page-ios-dark': '#000',
        primary: {
          light: '#3997ab',
          DEFAULT: '#2f7c8c',
          dark: '#25616d',
        },
      },
    },
  },
  plugins: [],
})
