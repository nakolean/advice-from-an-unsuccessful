import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import { Typography, Card, CardHeader, CardContent } from '@material-ui/core';
import Base from '@Layout/Base';


const Markdown = ({ md }) => (
  <ReactMarkdown 
    source={md}
    renderers={{
      paragraph: props => (
        <Typography variant="body1" {...props} />
        ),
      heading: props => (
        <Typography variant={`h${props.level}`} {...props} />
      )
    }} />
);

const Post = ({ post }) => {
  const { frontmatter, rawMarkdownBody} = post;
  return (
    <React.Fragment>
      <Helmet title={`${frontmatter.title}`} />
      <Card>
        <CardHeader 
          title={frontmatter.title}
          subheader={frontmatter.date}
        />
        <CardContent>
          <Markdown md={rawMarkdownBody} />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
const PostPage = ({ data }) => (
  <Base>
    <Post post={data.markdownRemark} />
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
