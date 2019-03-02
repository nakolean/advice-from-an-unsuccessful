import React from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core';

const styles = () => ({
  root: {
    color: 'inherit',
    textDecoration: 'inherit',
  }
});

const BlankLink = ({ classes, to, children }) => (
  <Link to={to} className={classes.root}>
    {children}
  </Link>
)

export default withStyles(styles)(BlankLink);