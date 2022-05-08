import React, { useEffect, useState } from 'react';
import { Avatar, Box, Text, Tab, Tabs, Header, Button } from "grommet";
//  still need to do 

const NewArtists = (props) => {
    const { longTerm, shortTerm } = props;
    const [ newArtists, setnewArtists ] = useState(null);
    const [ currentArtists, setcurrentArtists ] = useState(null);
    const [ currentPage, setCurrentPage ] = useState(null);
    const [ pageNumbers, setPageNumbers ] = useState(null);
    const artistsPerPage = 5;

    function calculateNewArtists() {
        //  filter short term artists that are in long term artists
        let newArray = []
        //  console.log(shortTerm);
        shortTerm.forEach(element => {
            if (longTerm.filter(function(e) { return e.name === element.name; }).length === 0) {
                /* long term contains the element we're looking for */
                //  console.log(`${element.name} is not in long term list`);
                newArray.push(element);
            }
        });
        //  console.log(newArray);
        setnewArtists(newArray);
        //  return results;
    }
    function displayArtists() {
        const indexOfLastArtist = currentPage * artistsPerPage;
        const indexOfFirstArtist = indexOfLastArtist - artistsPerPage;
        console.log(newArtists);
        //  const current = newArtists.slice(indexOfFirstArtist, indexOfLastArtist);
        //  setcurrentArtists(current);
        
        //  set page numbers
        /*let pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newArtists.length / artistsPerPage); i++) {
            pageNumbers.push(i);
        }
        setPageNumbers(pageNumbers);*/
    }
    // Logic for displaying todos
    /*function renderArtists() {
        //  const indexOfLastArtist = currentPage * artistsPerPage;
        //  const indexOfFirstArtist = indexOfLastArtist - artistsPerPage;
        const currentArtists = newArtists.slice(indexOfFirstArtist, indexOfLastArtist);
        return (
            <Box>
            {currentArtists.map((artist) => {
                return (
                    <Box direction='column'>
                        <Avatar src={artist.images[0].url} />
                        <Text weight="bold">{artist.name}</Text>
                        <Text color="text-xweak">Artist</Text>
                    </Box>
                );
            })}
        </Box>);
    }*/
  
    useEffect(() => {
        calculateNewArtists();
        displayArtists();
        //  displayNewArtists();
    }, [])
    return (
        <Box direction='row'>
            { newArtists && (
                <div>
                    {currentArtists.map((artist) => {
                        <Box direction='column'>
                            <Avatar src={artist.images[0].url} />
                            <Text weight="bold">{artist.name}</Text>
                            <Text color="text-xweak">Artist</Text>
                        </Box>
                    })}
                    <ul id="page-numbers">
                        {pageNumbers && pageNumbers.map(number => {
                            <li
                            key={number}
                            id={number}
                            onClick={() => setCurrentPage(number)}
                            >
                            {number}
                            </li>
                        })}
                    </ul>
                </div>
            )}
        </Box>
    );
};

export default NewArtists;