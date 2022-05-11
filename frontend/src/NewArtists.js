import React, { useEffect, useState } from 'react';
import GridPagination from './GridPagination';
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
                const newObject = {
                    name: element.name,
                    image: element.images[0].url,
                    popularity: element.popularity
                }
                newArray.push(newObject);
            }
        });
        setnewArtists(newArray);
    }
    useEffect(() => {
        calculateNewArtists(shortTerm, longTerm);
    }, [longTerm, shortTerm])
    return (
        <GridPagination data={newArtists} title="Your Recent Artists" label="Artist"/>
    );
};

export default NewArtists;