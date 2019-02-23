import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { graphql, StaticQuery } from 'gatsby';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

const styles = theme => ({
  card: {
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
  }
})

const PostCard = ({ title, date, description}) => (
  <Card>
    <CardHeader title={title} />
    <CardContent>
      <Typography variant="caption">
        {description}
      </Typography>
    </CardContent>
  </Card>

)

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
            <Grid item xs={6} className={classes.card}>
              <PostCard
                title={post.getIn(['node', 'frontmatter', 'title'])} 
                date={post.getIn(['node', 'frontmatter', 'title'])}
                description={post.getIn(['node', 'excerpt'])} />
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