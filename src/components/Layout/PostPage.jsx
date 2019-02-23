import React from 'react'
import { graphql } from 'gatsby'
import NavBar from '@Navigation'
import PostCard from '@Post'

const PostPage = ({ data }) => (
  <React.Fragment>
    <NavBar />
    <PostCard post={data.markdownRemark} />
  </React.Fragment>
)

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
`