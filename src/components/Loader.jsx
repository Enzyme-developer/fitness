import React from 'react';
import { Stack } from '@mui/material';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <BallTriangle color="#ff2625" />
  </Stack>
);

export default Loader;