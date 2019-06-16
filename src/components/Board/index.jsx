import React from 'react';
import { fromJS } from 'immutable';
import Grid from '@material-ui/core/Grid';
import { graphql, StaticQuery } from 'gatsby';
import Item from './Item';


const PostBoard = () => {
  return (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              rawMarkdownBody
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
                path
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => {
      const posts = fromJS(allMarkdownRemark);
      return (
        <Grid container spacing={16}>
          {posts.get('edges').map((post, index) => (
              <Item
                key={index}
                title={post.getIn(['node', 'frontmatter', 'title'])}
                date={post.getIn(['node', 'frontmatter', 'date'])}
                md={post.getIn(['node', 'rawMarkdownBody'])}
                path={post.getIn(['node', 'frontmatter', 'path'])}
                size={12}
              />
          ))}
        </Grid>
      );
    }}
  />
);};

export default PostBoard;
