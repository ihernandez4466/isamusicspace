import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid, Text } from 'grommet';
import Artists from './Artists';
import NewArtists from './NewArtists';
import { getTopArtists, getTopTracks} from './Spotify';
import { catchErrors } from './utils';
import Tracks from './Tracks';
import Loading from './Loading';
import Genres from './Genres';
import Albums from './Albums';

const AnalyticsGrid = () => {
    const [ longTermArtists, setlongTermArtists ] = useState(null);
    const [ shortTermArtists, setshortTermArtists ] = useState(null);
    const [ shortTermTracks, setshortTermTracks ] = useState(null);
    const [ longTermTracks, setlongTermTracks ] = useState(null);
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
    const fetchLongTermTracks = async () => {
        const { data } = await getTopTracks('long_term');
        setlongTermTracks(data.items);
        //  console.log(tracks);
    };
    const fetchShortTermTracks = async () => {
        const { data } = await getTopTracks('short_term');
        setshortTermTracks(data.items);
    };
    const NoData = (label) => {
        console.log('NO DATA');
        return (
            <Box pad="large">
                <Text>{`NO DATA from ${label}`}</Text>
            </Box>
        );
    }
    useEffect(() => {
        setIsLoading(true);
        catchErrors(fetchLongTermArtists());
        catchErrors(fetchShortTermArtists());
        catchErrors(fetchLongTermTracks());
        catchErrors(fetchShortTermTracks());
        setIsLoading(false);
    }, []);
    return (
        <Grid
        fill
        rows={['flex', 'flex', 'flex']}
        columns={['flex', 'flex']}
        align="center"
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
        {( isLoading || !longTermArtists || !shortTermArtists || !longTermTracks || !shortTermTracks) ? <Loading /> : (
            <Box fill align='center'>
                <Box round gridArea="albums" background="blue">{longTermArtists ? <Albums longTerm={longTermTracks} /> : NoData('albums') }</Box>
                <Box round gridArea="newArtists" background="green">{(longTermArtists && shortTermArtists) ? <NewArtists longTerm={longTermArtists} shortTerm={shortTermArtists} />: NoData('newartists') }</Box>
                <Box round gridArea="songs" background="red">{ shortTermTracks ? <Tracks topTracks={shortTermTracks}/> : NoData('songs')}</Box>
                <Box round gridArea="genres" background="green">{ longTermArtists ? <Genres longTermArtist={longTermArtists} />: NoData('genres')}</Box>
                <Box round gridArea="artists" background="red">{ longTermArtists ? <Artists longTermArtists={longTermArtists} /> : NoData('artists')}</Box>
                <Box round gridArea="decade" background="background-front">{ longTermArtists ? <Genres longTermArtist={longTermArtists} />: NoData('decade')}</Box>
            </Box>
        )}
        </Grid>
    );
};

export default AnalyticsGrid;