import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import { Typography, Card, CardHeader, CardContent } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const Content = ({ md }) => (
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

const PostCard = ({ post }) => {
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
          <Content md={rawMarkdownBody} />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default withStyles(styles)(PostCard);