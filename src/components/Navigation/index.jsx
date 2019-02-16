import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'

import { StaticQuery, graphql } from 'gatsby';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: `${2 * theme.spacing.rem}rem`
  },
  grow: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginLeft: `${theme.spacing.rem}rem`,
  //   marginRight: `${theme.spacing.rem}rem`,
  // },
});

const NavBar = ({ classes }) => (
  <StaticQuery
    query={detailsQuery}
    render={data => (
        <AppBar
          position="relative"
          className={classes.root}>
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {data.site.siteMetadata.title}
            </Typography>
          </Toolbar>
        </AppBar>
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
        description
        author
      }
    }
  }
`