import React from "react"
import { Box } from "grommet";
import GridTitle from "./GridTitle";
import DataList from "./DataList";
import Loading from "./Loading";

const GridScroll = ({ data, title, label }) => {
    return (
        <>
            <GridTitle title={title} 
                color="accent-1light"
            />
            { data ? (
                <DataList data={data} label={label}/>
            ) : (
                <Loading />
            )}
        </>
    )
};

export default GridScroll;