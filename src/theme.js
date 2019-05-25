import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = {
  palette: {
    primary: {
      light: "#2E9CCA",
      main: "#29648A",
      dark: "#25274D"
    },
    secondary: {
      light: "#AAABB8",
      main: "#464866"
    }
  }
};

const theme = createMuiTheme(defaultTheme)

export default theme

