import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import NavBar from '@Navigation'
import theme from '@Theme'

const IndexPage = () => (
  <MuiThemeProvider theme={theme}>
    <NavBar />
    <Typography variant="h2">Hi people</Typography>
  </MuiThemeProvider>
)

export default IndexPage
