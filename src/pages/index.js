import React from 'react';
import { install } from '@material-ui/styles';
install();

import PostBoard from '@Components/Board';
import Base from '@Layout/Base';

const Root = () => (
  <Base>
    <PostBoard />
  </Base>
);

export default Root;
