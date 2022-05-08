
   import React from 'react';
import {
  Box,
  Image,
  Text,
} from 'grommet';
import loading from './loading.gif';

const Loading = () => (
  <>
    <Box 
        margin="medium" 
        background='background-contrast' 
        justify="center" 
        align="center" 
        pad="large" 
    fill>
      <Text size="x-large">
        Loading...
        {' '}
      </Text>
      <Image src={loading} />
    </Box>
  </>
);

export default Loading;