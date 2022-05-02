const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing : {
        '1px' : '1px',
        '10px' : '10px',
      },
      fontFamily: {
        'radio' : ['Radio Canada', 'sans-serif'],
      },
      boxShadow : {
        'defi' : '0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)'
      },
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          650: '#4f545c99',
          600: '#4f545c',
          450: '#b9bbbe',
          420: '#96989D',
          400: '#d4d7dc',
          350: '#a3a6aa',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        }, 
        'discordBlue' : '#5865F2',
      },
    },
  },
  plugins: [],
}
