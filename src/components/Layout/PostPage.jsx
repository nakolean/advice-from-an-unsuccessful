import React from 'react';
import { graphql } from 'gatsby';
import NavBar from '@Navigation';
import PostCard from '@Post';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '@Theme';

const PostPage = ({ data }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <NavBar />
    <PostCard post={data.markdownRemark} />
  </MuiThemeProvider>
);

export default PostPage;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      rawMarkdownBody
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
