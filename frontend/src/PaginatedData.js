import React, { useState } from 'react';
import { Image, Box, Footer, Pagination, Text } from 'grommet';

const PaginatedGrid = (props) => {
    const { data, label, isAlbum } = props;
    //  console.log(`data is: ${data} and the length is: ${data.length}`);
    const [currentData, setCurrentData] = useState(data.slice(0, 3));
    //  const [indices, setIndices] = useState([0, data.length/3]);

    const handleChange = ({ startIndex, endIndex }) => {
        const nextData = data.slice(startIndex, endIndex);
        setCurrentData(nextData);
    };

    return (
        //  this box is done
        <Box margin="small" align='center' fill>
            <Box direction='row' pad="small" gap="small" fill>
                {currentData.map((element) => {
                    return (
                        <Box key={element.name} direction='column'>
                            <Box>
                                <Image
                                    fit="cover"
                                    //  height="100px"
                                    //  max-height="75%"
                                    //  width="100px" 
                                    //  max-width="33.33%"
                                    src={element.image}
                                />
                            </Box>
                            <Box>
                                <Text weight="bold" style={{ textAlign:'center', fontSize: "small"}}>{element.name}</Text>
                                <Text style={{ textAlign:'center', fontSize: "small"}}>{label ? label : element.artist }</Text>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
            <Footer pad="xsmall">
                <Pagination
                    numberMiddlePages={1}
                    step={3} 
                    numberItems={data.length} 
                    onChange={handleChange} 
                />
            </Footer>
        </Box>
        );
};
export default PaginatedGrid;