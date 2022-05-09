import React, { useEffect, useState } from 'react';
import { Box } from "grommet";
import PaginatedGrid from './PaginatedData';
import Loading from './Loading';
//  still need to do 
//  spacing and ensure pictures appear

const NewArtists = (props) => {
    const { longTerm, shortTerm } = props;
    const [ newArtists, setnewArtists ] = useState(null);

    function calculateNewArtists(array1, array2) {
        //  filter short term artists that are in long term artists
        let newArray = []
        //  console.log(shortTerm);
        array1.forEach(element => {
            if (array2.filter(function(e) { return e.name === element.name; }).length === 0) {
                /* long term contains the element we're looking for */
                newArray.push(element);
            }
        });
        setnewArtists(newArray);
    }
    useEffect(() => {
        calculateNewArtists(shortTerm, longTerm);
    }, [longTerm, shortTerm])
    return (
        <Box align="center">
            { newArtists ? (
                <PaginatedGrid data={newArtists} label="Artist" />
            ) : (
                <Loading />
            )}
        </Box>
    );
};

export default NewArtists;