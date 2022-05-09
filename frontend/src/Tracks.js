import React from 'react';
import { useState, useEffect } from 'react';
import { Box } from "grommet";
import DataList from './DataList';
import Loading from './Loading';

const Tracks = ({ topTracks }) => {
    const [ Tracks, setTracks ] = useState(null);

    function parseSpotifyResponse(tracks) {
        const resultTracks = tracks.map((track) => {
            const newObject = {
                image: track.album.images[0].url,
                //  release_date: track.album.release_date,
                name: track.name,
                popularity: track.popularity
            };
            return newObject;
        });
        setTracks(resultTracks.slice(0,5));
    }

    useEffect(() => {
        parseSpotifyResponse(topTracks);
    }, [topTracks]);
    return (
        <Box direction='column' align="center">
            { Tracks ? <DataList data={Tracks} label="Song" /> : (
                <Loading />) }
        </Box>
    );
}

export default Tracks;