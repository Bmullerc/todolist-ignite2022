/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'theme-purple': '#8284FA',
      'theme-purple-dark': '#5E60CE',
      'theme-blue': '#4ea8de',
      'theme-blue-dark': '#1e6f9f',
      'theme-danger': '#e25858',
      'gray-100': '#f2f2f2',
      'gray-200': '#d9d9d9',
      'gray-300': '#808080',
      'gray-400': '#333333',
      'gray-500': '#262626',
      'gray-600': '#1a1a1a',
      'gray-700': '#0d0d0d',
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
