import React from 'react';
import GridScroll from './GridScroll';
//  still need to do 
//  spacing
//  border and scrolling ability
const Artists = ({ longTermArtists }) => {
    function parseSpotifyResponse(artists) {
        const resultArtists = artists.map((artist) => {
            const newObject = {
                //  image: "https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b",
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
    const top = artists.slice(0, length/2);
    //  const bottom = artists.slice(length-10, length);
    return (
        <GridScroll data={top} title="Your All Time Artists" label="Artist" />
    )
}

export default Artists;