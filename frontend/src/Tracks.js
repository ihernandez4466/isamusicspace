import React from 'react';
import { useState, useEffect } from 'react';
import GridScroll from './GridScroll';

const Tracks = ({ topTracks }) => {
    const [ Tracks, setTracks ] = useState(null);

    function parseSpotifyResponse(tracks) {
        const resultTracks = tracks.map((track) => {
            //  const default = "https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b"
            const newObject = {
                image: track.album.images[0].url,
                //  release_date: track.album.release_date,
                name: track.name,
                popularity: track.popularity
            };
            return newObject;
        });
        const length = resultTracks.length;
        setTracks(resultTracks.slice(0, length/2));
    }

    useEffect(() => {
        parseSpotifyResponse(topTracks);
    }, [topTracks]);
    return (
        <GridScroll data={Tracks} title="Top Tracks" label="Song"/>
    );
}

export default Tracks;