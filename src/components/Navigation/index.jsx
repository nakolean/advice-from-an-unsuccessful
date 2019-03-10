import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { StaticQuery, graphql } from 'gatsby';
import { Divider } from '@material-ui/core';
import Link from '@Navigation/Link';

const useStyles = makeStyles(theme =>({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
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
        <Toolbar className={classes.root}>
          <Grid item>
            <Typography variant="h4">
              <Link to="/">
                {data.site.siteMetadata.title}
              </Link>
            </Typography>
          </Grid>
        </Toolbar>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
      </Grid>
    );
    }}
    />
)};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
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