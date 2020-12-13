import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const colors = {
  primary: '#e18380',
  secondary: '#209d83',
  gray: '#d7e8e1',
};

// Create a theme instance.
const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontSize: 14,
      fontFamily: 'Karla, sans-serif',
      h1: {
        fontFamily: 'Merriweather, sans-serif',
        fontWeight: 700,
        '@media (max-width: 768px)': {
          fontSize: '3rem !important',
        },
        '@media (max-width:525px)': {
          fontSize: '2rem !important',
        },
      },
      h2: {
        fontFamily: 'Merriweather, sans-serif',
        fontWeight: 700,
      },
    },
    props: {
      MuiPaper: {
        elevation: 3,
      },
      MuiCard: {
        elevation: 3,
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 50,
        },
        label: {
          fontFamily: 'Karla, sans-serif',
          fontSize: 28,
          textTransform: 'none',
        },
      },
      MuiInputBase: {
        input: {
          padding: '8px 0',

          '&::placeholder': {
            textTransform: 'uppercase',
            fontFamily: 'Karla, sans-serif',
            fontWeight: 500,
            fontSize: 14,
            color: colors.secondary,
          },
        },
      },
      MuiInputAdornment: {
        root: { fill: '#ababab', color: '#ababab' },
      },
    },
    palette: {
      primary: {
        main: '#e18380',
      },
      secondary: {
        main: '#209d83',
      },
      background: {
        default: '#ffffff',
        paper: '#d7e8e1',
      },
      text: {
        secondary: '#d7e8e1',
      },
      type: 'light',
    },
  })
);

export default theme;
