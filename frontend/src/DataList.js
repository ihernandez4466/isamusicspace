import React from 'react';
import { Avatar, Box, Text } from "grommet";

const DataList = (props) => {
    const { data } = props;
    return (
        <Box flex pad="small" align="center" overflow="auto" fill>
            <Box gap="xsmall" direction="column" >
                {data.map((element) => (
                    <Box key={element.name} 
                        //  border={{ side: 'bottom', color: 'brand-accent'}}
                        flex={false} 
                        direction="row"
                        align='center'
                        gap="small"
                    >
                        <Avatar src={element.image} />
                        <Text weight="bold">{element.name}</Text>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
export default DataList;