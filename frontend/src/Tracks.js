import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Text } from "grommet";
import { catchErrors } from './utils';
import { getTopTracks } from './Spotify';

const Tracks = () => {
    const [ longTermTracks, setlongTermTracks ] = useState(null);
    const [ shortTermTracks, setshortTermTracks ] = useState(null);

    function parseSpotifyResponse(tracks) {
        const resultTracks = tracks.map((track) => {
            const newObject = {
                albumImage: track.album.images[0],
                release_date: track.album.release_date,
                name: track.name,
                popularity: track.popularity
            };
            return newObject;
        });
        console.log(resultTracks);
        return resultTracks;
    }

    useEffect(() => {
        const fetchLongTermTracks = async () => {
            const { data } = await getTopTracks('long_term');
            const tracks = parseSpotifyResponse(data.items);
            setlongTermTracks(tracks);
        };
        const fetchShortTermTracks = async () => {
            const { data } = await getTopTracks('long_term');
            const tracks = parseSpotifyResponse(data.items);
            setshortTermTracks(tracks);
        };
        catchErrors(fetchLongTermTracks());
        catchErrors(fetchShortTermTracks());
    }, []);
    return (
        <Box direction='row' height="50%">
            <Box direction='row' flex height="100%" background="background-front" margin="small" align="center">
            </Box>
            <Box>
                <Text>Graph</Text>
            </Box>
        </Box>
    );
}

export default Tracks;