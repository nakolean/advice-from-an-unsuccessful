import React from 'react';
import { Grid, Card, CardContent, Typography, Divider } from '@material-ui/core';
import Link from '@Navigation/Link';
import Markdown from '@Components/Markdown';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  description: {
    height: `${theme.spacing.unit / 2}rem`,
    overflowY: 'hidden'
  },
}));

const Title = ({ title }) => (
  <Grid item>
    <Typography variant="h6">
      {title}
    </Typography>
  </Grid>
);

const SubTitle = ({ date }) => (
  <Grid item>
    <Typography variant="subtitle1" color="textSecondary">
      {date}
    </Typography>
  </Grid>
);

const MoreButton = ({path}) => (
  <Grid item>
    <Link to={path}>
        <Typography variant="body1" color="primary">
          Continue Reading
        </Typography>
    </Link>
  </Grid>
);

const Item = ({ size, title, date, md, path }) => {
  const classes = useStyles();
  return (
    <Grid item xs={size}>
      <Card>
        <CardContent>
          <Grid container direction="column" spacing={8}>
            <Title title={title} />
            <SubTitle date={date} />
            <Divider />
            <Grid item className={classes.description}>
                <Markdown md={md} />
            </Grid>
            <MoreButton path={path} />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Item;