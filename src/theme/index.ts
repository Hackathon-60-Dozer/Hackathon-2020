import { createMuiTheme } from '@material-ui/core/styles';

export const colors = {
  primary: '#e18380',
  secondary: '#209d83',
  gray: '#d7e8e1',
};

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: 'Karla, sans-serif',
    },
    h1: {
      fontFamily: 'Merriweather, sans-serif',
      fontSize: '5.5vw',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Merriweather, sans-serif',
      fontWeight: 700,
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
});

export default theme;
