import React from "react"
import { Link } from "gatsby"

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const IndexPage = () => (
  <MuiThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Typography variant='h2'>Hi people</Typography>
      <Typography variant='body1'>Welcome to your new Gatsby site.</Typography>
      <Typography variant='body1'>Now go build something great.</Typography>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </MuiThemeProvider>
)

export default IndexPage
