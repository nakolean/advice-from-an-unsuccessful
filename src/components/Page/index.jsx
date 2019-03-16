import React from 'react';
import { graphql } from 'gatsby';
import Base from '@Layout/Base';
import PostCard from '@Post';
const PostPage = ({ data }) => (
  <Base>
    <PostCard post={data.markdownRemark} />
  </Base>
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
