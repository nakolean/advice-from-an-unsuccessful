import React from 'react';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { StaticQuery, graphql } from 'gatsby';
import { AppBar } from '@material-ui/core';
import Link from '@Navigation/Link';

const NavBar = () => {  
  return (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      return (
      <Grid container>
        <AppBar color="primary" position="relative">
          <Toolbar >
            <Grid item xs={8}>
              <Typography variant="h4" color="inherit">
                <Link to="/">
                  {data.site.siteMetadata.title}
                </Link>
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
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