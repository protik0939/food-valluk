/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'min': '0px', 'max': '700px' },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

