import React from "react"
import { Box, Text } from "grommet";
import GridTitle from "./GridTitle";
import DataList from "./DataList";
import Loading from "./Loading";

const GridScroll = ({ data, title, label }) => {
    return (
        <>
            <GridTitle title={title} 
                color="!brand-accent"
            />
            { data ? (
                <>
                {data.length !== 0 ?
                    <DataList data={data} label={label}/> : <Box align="center"><Text>You have no data :(</Text></Box>
                }
                </>
            ) : (
                <Loading />
            )}
        </>
    )
};

export default GridScroll;