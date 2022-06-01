const konstaConfig = require('konsta/config')

module.exports = konstaConfig({
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#da5830',
          DEFAULT: '#bf4722',
          dark: '#9c3a1c',
        },
      },
    },
  },
  plugins: [],
})
