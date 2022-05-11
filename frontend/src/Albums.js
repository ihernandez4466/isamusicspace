import React, { useEffect, useState } from 'react';
import GridPagination from './GridPagination';
//  still need to do 
//  spacing and ensure pictures appear

const Albums = (props) => {
    const [ albums, setAlbums ] = useState(null);
    const { longTerm } = props;
    //  console.log(`long term was: ${longTerm}`);
    function parseSongsForAlbums(songs) {
        //  filter short term artists that are in long term artists
        let results = [];
        songs.forEach(song => {
            const albumName = song.album.name;
            const artist = song.album.artists[0].name;
            const index = results.findIndex(element => element.name === albumName);
            if(index === -1){
                // does not exist yet
                const newObject = {
                    name: albumName,
                    image: song.album.images[0].url,
                    artist: artist,
                    release_date: song.album.release_date,
                    count: 1,
                };
                results.push(newObject);
            } else {
                results[index].count = results[index].count + 1;
            }
        });
        results.sort((a, b) => (a.count < b.count) ? 1 : -1);
        const slicedResults = results.slice(0, 9);
        setAlbums(slicedResults);
        //  parse album repeats and count
    }
    useEffect(() => {
        parseSongsForAlbums(longTerm);
    },[longTerm])
    return (
        <GridPagination data={albums} title="Top Albums" />
    );
};

export default Albums;