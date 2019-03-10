import React from 'react';
import { install } from '@material-ui/styles';

install();
import PostBoard from '@Layout/PostBoard';
import Base from '@Layout/Base';

const Root = () => (
  <Base>
    <PostBoard />
  </Base>
);

export default Root;
