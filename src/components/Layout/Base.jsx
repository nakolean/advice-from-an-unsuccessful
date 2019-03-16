import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import NavBar from '@Navigation';
import Theme from '@Theme';

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: theme.spacing.lgWidth,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
}));

const ContentWrapper = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      {children}
    </div>
  );
};

const Base = ({ theme, children }) => (
<ThemeProvider theme={Theme}>
    <CssBaseline />
    <NavBar />
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </ThemeProvider>
);

export default Base;