import React, { useEffect, useState } from 'react';
import { Chart, Text, Box } from "grommet";
import Loading from './Loading';
import GridTitle from './GridTitle';

//  still need to:
//  spacing
// tool tips with the subgenres

const Decade = ({ longTerm }) => {
    const [results, setResults] = useState(null);
    const [minBound, setminBound ] = useState(null);
    const [maxBound, setmaxBound ] = useState(null);
    const [maxCount, setmaxCount ] = useState(null);
    const [ xaxis, setxAxis ] = useState(['2007, 2015, 2022']);
    const years = [];

    function checkYearsArray(array, year) {
        const index = array.findIndex(element => element.year === year);
        if(index !== -1){
            array[index].count++;
        } else {
            const newYear = {
                year: year,
                count: 1,
            };
            array.push(newYear);
        }
    }
    function calculateDecades(tracks) {
        tracks.forEach(track => {
            const albumDate = track.album.release_date;
            const precision = track.album.release_date_precision;
            if(precision === 'day'){
                // parse year from data
                const date = albumDate.split('-');
                const year = date[0];
                checkYearsArray(years, year);
            } else if(precision === 'year'){
                // no need to parse
                checkYearsArray(years, albumDate);
            } else {
                // unfamiliar with the precision - dont include
                console.log(`${albumDate} to precision : ${precision} is unfamiliar`);
            }
        });
        years.sort((a, b) => (a.year > b.year) ? 1 : -1);
        setResults(years);
        const max = Math.max.apply(null, years.map(function(item) {
            return item.count;
          }));

        setmaxCount(max);
        setminBound(parseInt(years[0].year));
        setmaxBound(parseInt(years[years.length-1].year));

        const numOfIter = Math.round((maxBound-minBound)/10);
        let temp = [];
        let start = minBound;
        temp.push(start);
        for (let i = 0; i < numOfIter; i++) {
            start = start + 10;
            temp.push(start);
        }
        temp.push(maxBound);
        //  console.log(temp);
        setxAxis(temp);
        //  console.log(xaxis);
    }
    function convert(){
        let newArray = [];
        let i = 1;
        results.forEach((element) => {
            if(i > 5){
                i = 1;
            }
            const yearInt = parseInt(element.year);
            //  console.log(`string to int is: ${yearInt}`);
            const value = [yearInt, element.count];
            const object = {
                value: value,
                color: `neutral-${i}`,
                label: element.year,
            };
            newArray.push(object);
            i = i+1;
        });
        return newArray;
    }
    useEffect(() => {
        calculateDecades(longTerm);
    },[longTerm]);

    return (
        <>
            <GridTitle title="Decade you live in" color="!brand-accent"/>
            { (results && xaxis) ? 
                <Box pad="small"gap="xsmall">
                    <Box border={{ side: 'bottom' }}>
                    <Chart
                        bounds={[[minBound, maxBound], [0, maxCount]]}
                        values = {convert()}
                    />
                    </Box>
                    <Box direction='row' justify='between'>
                        {xaxis.map((element) => {
                            console.log(element);
                            return (
                                <Text>{element}</Text>
                            );
                        })}
                    </Box>
                    </Box> : <Loading /> }
        </>
    );
}

export default Decade;
