/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      gridTemplateColumns: {
        item: '24px 1fr 16px',
      },
      colors: {
        'lightgray': {
          'prewhite': '#FAFBFF',
          'lightestest': '#F9FBFF',
          'lightester': '#F5F5F5',
          'lightest': '#EEEEEE',
          'lighter': '#B5B7C0',
          'light': '#9197B3',
          DEFAULT: '#838383',
          'darker': '#757575',
          'darkest': '#404B52',
          'darkestest': '#292D32',
        },
        success:{
          'darker': '#008767',
          'dark': '#00B087',
          DEFAULT: '#16C098',
          'light': '#16C09861',
        },
        danger:{
          'dark':'#DF0404',
          'light':'#FFC5C5',
        },
        accent:{
          'light':'#a087fa',
          DEFAULT:'#5932EA'
        }
      },
      screens: {
        'xs': '320px',
      }
    },
  },
  plugins: [],
}

