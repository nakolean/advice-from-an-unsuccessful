import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { Typography, Card, CardHeader, CardContent } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});
const Content = ({ html }) => (
  <Typography>
    <div dangerouslySetInnerHTML={{ __html: html}} />
  </Typography>
)

const PostCard = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <React.Fragment>
      <Helmet title={`${post.frontmatter.title}`} />
      <Card>
        <CardHeader title={post.frontmatter.title} />
        <CardContent>
          <Content html={post.html} />
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default withStyles(styles)(PostCard);

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