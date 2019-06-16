import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/styles';
import TOC from './TableOfContents';
import NavBar from '@Navigation';
import Theme from '@Theme';

const Base = ({ theme, children }) => (
<ThemeProvider theme={Theme}>
    <CssBaseline />
    <NavBar />
    <Grid
      container
      justify="center"
      spacing={8}>
      <Grid item xs={12} lg={6}>
        {children}
      </Grid>
      <Grid item lg={2} xs={0}>
        <TOC />
      </Grid>
    </Grid>
  </ThemeProvider>
);

export default Base;