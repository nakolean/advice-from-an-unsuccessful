import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import NavBar from '@Navigation'
import PostBoard from '@Layout/PostBoard'
import theme from '@Theme'
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
})

const Root = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div className={classes.layout}>
      <NavBar />
      <main>
        <PostBoard />
      </main>
    </div>
  </MuiThemeProvider>
)

export default withStyles(styles)(Root)
