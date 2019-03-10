import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: 'inherit',
    textDecoration: 'inherit',
  }
});

const BlankLink = ({ to, children }) => {
  const classes = useStyles();
  return (
    <Link to={to} className={classes.root}>
      {children}
    </Link>
  );
};

export default BlankLink;