import React from "react"
import { Box, Text } from "grommet";
import { Group } from "grommet-icons";
import GridTitle from "./GridTitle";
import PaginatedGrid from "./PaginatedData";
import Loading from "./Loading";

const GridPagination = ({ data, title, label }) => {
    return (
        <>
            <GridTitle title={title} />
            { data ? (
                <>
                { data.length !== 0 ?
                <PaginatedGrid data={data} label={label} />
                : <Box pad="large" align="center">
                    <Group />
                    <Text>You have not listened outside of your comfort zone recently</Text></Box>
                    }
                </>
            ) : (
                <Loading />
            )}
        </>
    )
};

export default GridPagination;