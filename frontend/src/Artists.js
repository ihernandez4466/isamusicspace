import React from 'react';
import { Box, Tab, Tabs, Header } from "grommet";
import DataList from './DataList'
//  still need to do 
//  spacing
//  border and scrolling ability
const Artists = ({ longTermArtists }) => {
    
    function parseSpotifyResponse(artists) {
        const resultArtists = artists.map((artist) => {
            const newObject = {
                image: artist.images[0].url,
                name: artist.name,
                popularity: artist.popularity,
            };
            return newObject;
        });
        return resultArtists;
    }
    const artists = parseSpotifyResponse(longTermArtists);
    const length = artists.length;
    const top = artists.slice(0, 10);
    const bottom = artists.slice(length-10, length);

    /*const List = (artists) => {
        return (
            <Box fill pad="small" overflow={{ horizontal: 'hidden', vertical: 'scroll' }}>
                {artists.map((artist) => (
                    <Box key={artist.name} border direction="row-responsive" gap="small" align="center">
                        <Avatar src={artist.image.url} />
                        <Text weight="bold">{artist.name}</Text>
                        <Text color="text-xweak">Artist</Text>
                    </Box>
                    ))
                }
            </Box>
        );
    }*/

    return (
        <Box align='center' round direction="column">
        <Header round background='accent-1'>Artists</Header>
            <Tabs>
               <Tab title="Your Top Artists">
                { top && <DataList data={top} label="Artists"/> }
               </Tab>
               <Tab title="Artists you could appreciate more">
                { bottom && <DataList data={bottom} label="Artists"/> }
               </Tab>
           </Tabs>
        </Box>
    );
}

export default Artists;