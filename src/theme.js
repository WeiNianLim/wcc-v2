import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = {
  palette: {
    primary: {
      light: "white",
      main: "#66FCF1",
      dark: "#45A29E",
    },
    secondary: {
      light: "#C5C6C7",
      main: "#1F2833",
      dark: "#0B0C10"
    }
  }
};

const theme = createMuiTheme(defaultTheme)

export default theme

