import React from "react"
// import { Link } from "gatsby"

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const IndexPage = () => (
  <MuiThemeProvider theme={theme}>
    <Typography variant='h2'>Hi people</Typography>
  </MuiThemeProvider>
)

export default IndexPage
