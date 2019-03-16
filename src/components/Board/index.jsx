import React from 'react';
import { fromJS } from 'immutable';
import Grid from '@material-ui/core/Grid';
import { graphql, StaticQuery } from 'gatsby';
import { PostCard } from '@Post';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    padding: 16
  },
}));

const PostBoard = () => {
  const classes = useStyles();
  return (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
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
      const posts = fromJS(allMarkdownRemark);
      return (
        <Grid container item xs={8} >
          <Paper className={classes.root} elevation={0} square>
            <Grid container spacing={16}>
              {posts.get('edges').map((post, index) => (
                <Grid item xs={6} key={index}>
                  <PostCard
                    title={post.getIn(['node', 'frontmatter', 'title'])}
                    date={post.getIn(['node', 'frontmatter', 'date'])}
                    description={post.getIn(['node', 'excerpt'])}
                    link={post.getIn(['node', 'frontmatter', 'path'])}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      );
    }}
  />
);};

export default PostBoard;
