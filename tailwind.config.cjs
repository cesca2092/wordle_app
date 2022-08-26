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
}
