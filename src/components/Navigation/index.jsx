import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { StaticQuery, graphql, Link } from 'gatsby';
import { Divider } from '@material-ui/core';

const styles = theme => ({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
});

const NavBar = ({ classes }) => (
  <StaticQuery
    query={detailsQuery}
    render={data => (
      <div>
        <Toolbar className={classes.root}>
          <Typography variant="h5">
            <Link to="/">
              {data.site.siteMetadata.title}
            </Link>
          </Typography>
        </Toolbar>
        <Divider />
      </div>
    )}
    />
);

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

const detailsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`