import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { StaticQuery, graphql } from 'gatsby';
import { Divider, AppBar } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import Link from '@Navigation/Link';

const useStyles = makeStyles(theme =>({
  root: {
    flex: 1,
    paddingTop: theme.spacing.unit * 1.5,
    paddingBottom: theme.spacing.unit * 2,
    justifyContent: 'flex-start',
  },
  toolbar: {
    [theme.breakpoints.up(1100 + theme.spacing.unit * 6)]: {
      width: theme.spacing.lgWidth,
      padding: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  divider: {
    height: theme.spacing.unit / 2,
    marginBottom: theme.spacing.unit * 4,
  }
}));

const NavBar = () => {
  const classes = useStyles();
  
  return (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      return (
      <Grid container item xs={12}>
        <AppBar className={classes.root} color="primary" position="relative">
          <Toolbar className={classes.toolbar}>
            <Grid item>
              <Typography variant="h4" color="inherit">
                <Link to="/">
                  {data.site.siteMetadata.title}
                </Link>
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
      </Grid>
    );
    }}
    />
  );
};

export default NavBar;

const detailsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;