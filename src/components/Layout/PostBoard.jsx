import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { graphql, StaticQuery } from 'gatsby';
import { Card, CardContent, Typography } from '@material-ui/core';
import Link from '@Navigation/Link';

const useStyles = makeStyles({
  card: {
    flexGrow: 1,
    height: 250,
  },
});

const PostCard = ({ title, date, description, link }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.card}>
        <Grid container direction="column" justify="space-between">
          <Grid item>
            <Typography variant="h4">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="textSecondary">
              {date}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <Link to={link}>
              <Typography variant="subtitle1" color="primary">
                Continue Reading...
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const PostBoard = () => (
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
        <Grid container item md={6} xs={12} spacing={40}>
          {posts.get('edges').map((post, index) => (
            <Grid item xs={12} key={index}>
              <PostCard
                title={post.getIn(['node', 'frontmatter', 'title'])}
                date={post.getIn(['node', 'frontmatter', 'date'])}
                description={post.getIn(['node', 'excerpt'])}
                link={post.getIn(['node', 'frontmatter', 'path'])}
              />
            </Grid>
          ))}
        </Grid>
      );
    }}
  />
);

export default PostBoard;
