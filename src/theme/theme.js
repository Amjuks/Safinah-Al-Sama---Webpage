import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0ab5af', // Your brand color
      contrastText: '#ffffff',
    },
    background: {
      default: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: `'Montserrat', sans-serif`, 
  },
});

export default theme;