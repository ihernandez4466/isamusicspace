import React, { useState } from 'react';
import { Image, Box, Pagination, Text } from 'grommet';

const PaginatedGrid = (props) => {
    const { data, label } = props;
    const [currentData, setCurrentData] = useState(data.slice(0, 5));

    const handleChange = ({ startIndex, endIndex }) => {
        const nextData = data.slice(startIndex, endIndex);
        setCurrentData(nextData);
    };

    return (
        <Box align="center" direction='column'>
            <Box direction='row'>
                {currentData && currentData.map((element) => {
                    return (
                        <Box key={element.name} height="600px" width="600px">
                            <Image
                                //  fit="cover"
                                src={element.image}
                            />
                            <Text>{label}</Text>
                            <Text>{element.name}</Text>
                        </Box>
                    );
                })}
            </Box>
            <Pagination numberItems={data.length} onChange={handleChange} />
        </Box>
        );
};
export default PaginatedGrid;