
import { createThemes } from 'tw-colors';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'sm': '12px',
      'base': '14px',
      'xl': '16px',
      '2xl': '18px',
      '3xl': '20px',
      '4xl': '28px',
      '5xl': '32px',
    },
    extend: {
      fontFamily: {
        anekdevanagari: ["'Anek Devanagari'", "sans-serif"],
      },
      boxShadow: {
        'light-shadow': "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        'dark-shadow': "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      colors: {
        'blue': '#000068',
        'red': '#fd0202',
        'gray': '#616161',
        'black': 'black',
        'white': 'white',
        'transparent': 'transparent',
      },
    },
  },
  plugins: [
    // createThemes({
    //   light: {

    //   },
    //   dark: {
    //     'white': 'white',
    //     'black': 'black',
    //     'blue': '#000068',
    //     'red': '#fd0202',
    //     'gray': '#dddddd',
    //     'transparent': 'transparent',
    //   },
    // })
  ],
}