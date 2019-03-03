import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import NavBar from '@Navigation';
import theme from '@Theme';

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
});

const Base = ({ classes, children }) => (
<ThemeProvider theme={theme}>
    <CssBaseline />
    <div className={classes.layout}>
      <NavBar />
      {children}
    </div>
  </ThemeProvider>
);

export default withStyles(styles)(Base);