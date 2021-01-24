const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.tsx', '.src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      display: ['Teko'],
    },
    colors: {
      'darker-primary': 'var(--color-darker-primary)',
      primary: 'var(--color-primary)',
      'transparent-primary': 'var(--color-transparent-primary)',
      secondary: 'var(--color-secondary)',
      'light-secondary': 'var(--color-light-secondary)',
      'dark-grey': 'var(--color-dark-grey)',
      'light-grey': 'var(--color-light-grey)',
      'lighter-grey': 'var(--color-lighter-grey)',
      'lightest-grey': 'var(--color-lightest-grey)',
      'reddish-brown': 'var(--color-reddish-brown)',
      green: 'var(--color-green)',
      'light-transparent': 'var(--color-light-transparent)',
    },
    boxShadow: {
      custom: '0px 2px 15px 0px rgba(0,0,0,0.1)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
