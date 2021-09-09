import React from 'react';
import { useParams } from 'react-router';

const Element2 = () => {

    const { word, color1, color2 } = useParams();

    console.log("inside Element2")
    return (
        <div>
            <h1 style={{color: color1, backgroundColor: color2}}>The word is: {word}</h1>
        </div>
    );
};


export default Element2;