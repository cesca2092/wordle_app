/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime-600': '#6AAA64',
        'yellow-500': '#CEB02C',
        'gray-600': '#939B9F',
        'modal': '#F3F3F3',
        'main-title': '#F3F3F3',
        'keys': '#D3D6DA',
        'black': '#56575E',
        'board': 'rgba(147, 155, 159, 0.3)',
        'keyboard': 'rgba(218, 220, 224, 0.3)',
        'dark-bg': 'rgba(38, 43, 60, 0.89)',
        'modal-bg': '#262B3C',
        'app-bg': '#262B3C',
        'title-dark': 'rgba(218, 220, 224, 0.03)',
        'keyboard-dark': 'rgba(218, 220, 224, 0.03)',
        'letter-dark': 'rgba(147, 155, 159, 0.2)',
        'key-dark': '#565F7E',
        'light-one': '#66FFED 0%',
        'ligh-two': '#FFEEB2 100%',
        'dark-one': '#2B4485 6.6%',
        'dark-two': '#AFCAFF 96.98%',
        'title-options': '#818181',
        'title-options-dark': '#DADCE0'
      },
      backgroundPosition: {
        'c':'180deg'
      },
      boxShadow: {
        'default': 'inset 0px 6px 8px 3px rgba(0, 0, 0, 0.25)'
      },
      spacing: {
        '3': '11px',
      },
      minWidth: {
        'modal':'486px',
        'button': '200px',
        'main-title': '350px'
      },
      width: {
        'modal':'486px',
        'intro-letter': '60px',
        'main-title': '450px',
        'board-letter': '55px'
      },
      height: {
        'intro-letter': '60px',
        'board-letter': '55px',
        'main-title': '60px',
        'key': '44px'
      },
      minHeight: {
        'intro': '90%',
        'modal': '350px'
      },
      fontSize: {
        'lg': '25px',
        'xlg': '35px'
      },
      borderRadius: {
        'main-title': '15px',
        'board-letter': '5px',
        'key': '5px',
        'modal': '15px',
        'keyboard': '15px',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
