import React from 'react';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';

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

export default Markdown;