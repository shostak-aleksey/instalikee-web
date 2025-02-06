/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apricot': '#fbceb1',
        'tour': '#F0F0F0',
      },
      dropShadow: {
        '3xl': '0 0 7px rgba(0, 0, 0, 1)',
      },
      backgroundImage: {
        'chat-pattern': "url('/chat-pattern.webp')",
        'gradient-menu': 'linear-gradient(180deg, #0D0D0D 0%, #333 0.01%, #0D0D0D 71.88%)',
        'gradient-top-menu': 'linear-gradient(0deg, rgba(51, 51, 51, 0.85) 0%, #000 7.71%, #333 49.37%, #333 74.90%, #000 100%)',
        'gradient-top-menu-item': 'linear-gradient(0deg, #CCC 0%, #FFF 24.90%, #CCC 52.50%, #FFF 83.75%, #C4C4C4 100%)',
        'gradient-button': 'linear-gradient(0deg, #CCC 0%, #FFF 24.90%, #CCC 52.50%, #FFF 83.75%, #C4C4C4 100%)',
        'gradient-appricot': 'linear-gradient(0deg, rgba(183, 151, 90, 0.85) 0%, #8A6E3E 7.71%, #E7C173 49.37%, #E7C173 73.33%, #8A6E3E 100%)',
        'gradient-title': 'linear-gradient(0deg, rgba(183, 151, 90, 0.60) 0%, rgba(138, 110, 62, 0.70) 7.71%, rgba(231, 193, 115, 0.70) 49.37%, rgba(231, 193, 115, 0.70) 74.90%, rgba(138, 110, 62, 0.70) 100%)',
        'gradient-select': 'linear-gradient(0deg, rgba(183, 151, 90, 0.43) 0%, rgba(138, 110, 62, 0.50) 25%, rgba(231, 193, 115, 0.50) 50%, rgba(231, 193, 115, 0.50) 75%, rgba(138, 110, 62, 0.50) 100%)',
        'gradient-button-green': 'linear-gradient(180deg, #1EA413 0%, rgba(30, 164, 19, 0.77) 50.52%, #1EA413 100%)',
        'gradient-silver': 'linear-gradient(0.00deg, rgb(204, 204, 204) 0%,rgb(255, 255, 255) 24.896%,rgb(204, 204, 204) 52.5%,rgb(255, 255, 255) 83.75%,rgb(196, 196, 196) 100%)',
        'gradient-black': 'linear-gradient(180.00deg, rgb(13, 13, 13),rgb(51, 51, 51) 0.01%,rgb(13, 13, 13) 71.875%)',
        'gradient-blue': 'linear-gradient(180deg, #0D66CE 0%, rgba(13, 102, 206, 0.5) 0.01%, #0D66CE 98.1%)',
        'gradient-red': ' linear-gradient(180deg, #FF0000 0%, rgba(255, 0, 0, 0.5) 0.01%, #FF0000 98.1%)',
        'gradient-chat': 'linear-gradient(0deg, rgba(183, 151, 90, 0.595) 0%, rgba(138, 110, 62, 0.7) 7.71%, rgba(231, 193, 115, 0.7) 49.37%, rgba(231, 193, 115, 0.7) 74.9%, rgba(138, 110, 62, 0.7) 100%)',
        'gradient-token': 'linear-gradient(0deg, rgba(183, 151, 90, 0.85) 0%, #8A6E3E 7.71%, #E7C173 49.37%, #E7C173 74.9%, #8A6E3E 100%)',
        'gradient-red': 'linear-gradient(0deg, #FF0000 0%, rgba(255, 0, 0, 0.55) 24.9%, #FF0000 52.5%, rgba(255, 0, 0, 0.55) 83.75%, #FF0000 100%)',
        'gradient-black-menu' :"linear-gradient(180deg, #0D0D0D 0%, #333333 0.01%, #0D0D0D 71.87%)"

      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1580px',
    }
  },
  plugins: [plugin(function({ addComponents }) {
    addComponents({
      '.bd': {
        borderCollapse: 'separate !important'
      },
      // ...
    })
  })],
}

