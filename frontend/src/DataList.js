import React from 'react';
import { Avatar, Box, Text } from "grommet";

const DataList = (props) => {
    const { data, label } = props;
    return (
        <Box fill pad="small" overflow={{ horizontal: 'hidden', vertical: 'scroll' }}>
            {data.map((element) => (
                <Box key={element.name} border direction="row-responsive" gap="small" align="center">
                    <Avatar src={element.image} />
                    <Text weight="bold">{element.name}</Text>
                    <Text color="text-xweak">{label}</Text>
                </Box>
                ))
            }
        </Box>
    );
}
export default DataList;