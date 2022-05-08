import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid } from 'grommet';
import Artists from './Artists';
import NewArtists from './NewArtists';
import { getTopArtists } from './Spotify';
import { catchErrors } from './utils';
//  import Track from './Tracks';
import Loading from './Loading';
import Genres from './Genres';

const AnalyticsGrid = () => {
    const [ longTermArtists, setlongTermArtists ] = useState(null);
    const [ shortTermArtists, setshortTermArtists ] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchLongTermArtists = async () => {
        const { data } = await getTopArtists('long_term');
        setlongTermArtists(data.items);
        //  console.log(`fetched long term: ${longTermArtists}`);
    };
    const fetchShortTermArtists = async () => {
        const { data } = await getTopArtists('short_term');
        setshortTermArtists(data.items);
        //  console.log(`fetched short term ${shortTermArtists}`);
    };
    useEffect(() => {
        setIsLoading(true);
        catchErrors(fetchLongTermArtists());
        catchErrors(fetchShortTermArtists());
        setIsLoading(false);
    }, []);
    return (
        <Grid
        fill="vertical"
        rows={['auto', 'auto']}
        columns={['auto', 'auto', 'auto']}
        gap="small"
        margin="small"
        areas={[
            // [column, row] for coordinates
            { name: 'albums', start: [0, 0], end: [0, 0] },
            { name: 'newArtists', start: [1, 0], end: [1, 0] },
            { name: 'songs', start: [2, 0], end: [2, 0] },
            { name: 'genres', start: [0, 1], end: [0, 1] },
            { name: 'artists', start: [1, 1], end: [1, 1] },
            { name: 'decade', start: [2, 1], end: [2, 1] },
        ]}
        >
        {isLoading ? <Loading /> : (
            <Box>
                <Box round gridArea="albums" background="background-front"></Box>
                { (longTermArtists && shortTermArtists) && (
                    <Box round gridArea="newArtists" background="background-front"><NewArtists longTerm={longTermArtists} shortTerm={shortTermArtists} /></Box>
                )}
                <Box round gridArea="songs" background="background-front"></Box>
                {longTermArtists && 
                    <Box round gridArea="genres" background="background-front"><Genres longTermArtist={longTermArtists} /></Box> }
                {longTermArtists && 
                    <Box round gridArea="artists" background="background-front"><Artists longTermArtists={longTermArtists} /></Box>
                }
                <Box round gridArea="decade" background="background-front"></Box>
            </Box>
        )}
        </Grid>
    );
};

export default AnalyticsGrid;