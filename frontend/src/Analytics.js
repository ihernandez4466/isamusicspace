import React from 'react';
import { Box, Text } from "grommet";

const Analytics = () => {
    return (
        <Box direction='row'>
            <Box flex height="100%" background="background-front" margin="small" align="center">
                <Text>Scroll Box</Text>
            </Box>
            <Box>
                <Text>Graph</Text>
            </Box>
        </Box>
    );
}
export default Analytics;