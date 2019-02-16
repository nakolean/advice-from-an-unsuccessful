import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const Post = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <React.Fragment>
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <React.Fragment>
        <h1>{post.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </React.Fragment>
    </React.Fragment>
  )
}

export default withStyles(styles)(Post);

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`