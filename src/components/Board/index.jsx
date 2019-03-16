import React from 'react';
import { fromJS } from 'immutable';
import Grid from '@material-ui/core/Grid';
import { graphql, StaticQuery } from 'gatsby';
import { PostCard } from '@Post';

const PostBoard = () => (
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
        <Grid container xs={8} spacing={40}>
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
      );
    }}
  />
);

export default PostBoard;
