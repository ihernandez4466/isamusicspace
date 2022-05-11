import React from "react"
import { Box } from "grommet";
import GridTitle from "./GridTitle";
import PaginatedGrid from "./PaginatedData";
import Loading from "./Loading";

const GridPagination = ({ data, title, label }) => {
    return (
        <>
            <GridTitle title={title} />
            { data ? (
                <PaginatedGrid data={data} label={label} />
            ) : (
                <Loading />
            )}
        </>
    )
};

export default GridPagination;