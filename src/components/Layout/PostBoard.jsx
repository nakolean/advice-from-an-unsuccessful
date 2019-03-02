import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { graphql, StaticQuery } from 'gatsby';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import Link from '@Navigation/Link';

const styles = theme => ({
  card: {
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
  },
});

const PostCard = ({ title, date, description }) => (
  <Card>
    <CardHeader title={title} subheader={date} />
    <CardContent>
      <Typography variant="caption">{description}</Typography>
    </CardContent>
  </Card>
);

const PostBoard = ({ classes }) => (
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
        <Grid container>
          {posts.get('edges').map((post, index) => (
            <Grid item xs={4} className={classes.card} key={index}>
              <Link to={post.getIn(['node', 'frontmatter', 'path'])}>
                <PostCard
                  title={post.getIn(['node', 'frontmatter', 'title'])}
                  date={post.getIn(['node', 'frontmatter', 'date'])}
                  description={post.getIn(['node', 'excerpt'])}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      );
    }}
  />
);

PostBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostBoard);
