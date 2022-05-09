import React, { useEffect, useState } from 'react';
//  import { parentGenres } from './parentGenres';
import { Box } from "grommet";
import { Chart } from "react-google-charts";
import Loading from './Loading';

//  still need to:
//  spacing
// tool tips with the subgenres

const Genres = ({ longTermArtist }) => {
    const [results, setResults] = useState(null);

    function calculateGenres(artists) {
        const parentGenres = [{ genre: 'r&b', count: 0,subgenres: [], percent: 0,},{ genre: 'hip hop', count: 0, subgenres: [], percent: 0},
        { genre: 'latin', count: 0, subgenres: [], percent: 0},{ genre: 'rock', count: 0, subgenres: [], percent: 0}, { genre: 'pop', count: 0, subgenres: [], percent: 0},
        { genre: 'rap', count: 0, subgenres: [], percent: 0}, { genre: 'country', count: 0, subgenres: [], percent: 0}, { genre: 'electronic', count: 0, subgenres: [], percent: 0,},
        { genre: 'other', count: 0, subgenres: [], percent: 0}];

        let resultGenres = parentGenres;
        let genreCount = 0;
        artists.forEach((artist) => {
          const genres = artist.genres;
          genreCount += genres.length;

          // search for what genres already exist in array
          genres.forEach(genre => {
            
            const index = resultGenres.findIndex(element => element.genre === genre);
            if(index !== -1){
                //  console.log(`genre: ${genre} fits in ${resultGenres[index].genre}`);
                resultGenres[index].count++;
                resultGenres[index].percent = resultGenres[index].count/genreCount;
            } else {
                // is a subgenre or other
                const parentIndex = resultGenres.findIndex(element => genre.includes(element.genre))
                //  if genre is not a parent genre
                if(parentIndex === -1){
                    const otherIndex = resultGenres.findIndex(element => element.genre === 'other')
                    //  check if genre is already a subgenre in array
                    const found = resultGenres[otherIndex].subgenres.includes(genre);

                    //  not already a subgenre
                    if(!found){
                        resultGenres[otherIndex].subgenres.push(genre);
                    }
                    resultGenres[otherIndex].count++;
                    resultGenres[otherIndex].percent = resultGenres[otherIndex].count/genreCount;
                } else {
                    const found = resultGenres[parentIndex].subgenres.includes(genre);
                    //  not already a subgenre
                    if(!found){
                        resultGenres[parentIndex].subgenres.push(genre);
                    }
                    resultGenres[parentIndex].count++;
                    resultGenres[parentIndex].percent = resultGenres[parentIndex].count/genreCount;
                }
            }
          });
        });
        resultGenres.sort((a, b) => (a.count < b.count) ? 1 : -1);
        //  console.log(resultGenres);
        setResults(resultGenres);
    }
    useEffect(() => {
        calculateGenres(longTermArtist);
    }, [longTermArtist]);
    function convert(){
        let newArray = []
        newArray.push(['Genre', 'Percent', { type: 'string', role: 'tooltip', 'p': {'html': true} }]);
        results.forEach(x => {
            const object = [ `${x.genre}`, x.percent*100, `Subgenres: ${x.subgenres}` ]
            newArray.push(object);
        });
        return newArray;
    }
    const options = {
        title: 'My Top Genres',
        colors: ['#7D1E23', '#7D4346', '#C9A9AB', '#C96D71', '#944872', '#DEE8EC', '#1e4950', '#3c9fcf'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        chartArea: {
            // leave room for y-axis labels
            width: '94%'
          },
        //  width: '100%',
        //  is3D: true,
        //  width: 400,
        //  height: 240,
        pieHole: 0.6,
      };
    return (
        <Box align="center" background="background-front" >
            {results ? 
                <Chart
                    chartType="PieChart"
                    data={convert()}
                    options={options}
              /> : (
                <Loading />)
            }
        </Box>
    );
}
export default Genres;