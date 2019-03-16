import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 10,
  },
  spacing: {
    lgWidth: 1100,
  }
});

export default theme;