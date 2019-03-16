import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Divider } from '@material-ui/core';
import Link from '@Navigation/Link';

const PostCard = ({ title, date, description, link }) => {
  const [raised, setRaised] = useState(false);

  return (
    <Card
      onMouseOver={() => setRaised(true)}
      onMouseOut={() => setRaised(false)}
      raised={raised}>
      <CardContent>
        <Grid container direction="column" spacing={8}>
          <Grid item>
            <Typography variant="h6">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="textSecondary">
              {date}
            </Typography>
          </Grid>
          <Divider />
          <Grid item>
            <Typography variant="body1" paragraph>
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <Link to={link}>
              <Typography variant="body1" color="primary">
                Continue Reading...
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PostCard;