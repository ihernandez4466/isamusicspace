import React from 'react';
import { Box, Text, Header } from "grommet";
const GridTitle = ({ title, color }) => (
    <>
      <Box round margin="xsmall" align="center" background={color ? color : "none"}>
        <Header pad="xsmall">
          <Text pad="small" size="medium" weight="bolder">{title}</Text>
        </Header>
      </Box>
    </>
  );
export default GridTitle;