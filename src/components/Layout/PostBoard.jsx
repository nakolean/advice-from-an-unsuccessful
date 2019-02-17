import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { graphql, StaticQuery } from 'gatsby';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

const PostBoard = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node{
              frontmatter {
                title
                date
                path
                cover
                slug
                category
              }
              excerpt
            }
          }
        }
      }
      `}
    render={({ allMarkdownRemark }) => {
      const posts = fromJS(allMarkdownRemark)
      return (
        <Grid container>
          {posts.get('edges').map(post => (
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                {post.getIn(['node', 'frontmatter', 'title'])}
              </Paper>
           </Grid>
          ))}
        </Grid>
      )
    }} 
  />
)
      

PostBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostBoard);