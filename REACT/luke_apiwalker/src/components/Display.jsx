import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Display = () => {

    const {category, id} = useParams();

    const [info, setInfo] = useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(res=>{
            console.log('the name is ',res.data.name);
            setInfo(res.data);
        })
        .catch(err=>{
            console.log("Error occured!")
            console.log(err);
        })
    },[category,id])

    return (
        <div> 
        {
            category=="people"?
            <>
                <p>Name: {info.name}</p>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
            </>:
            category=="planets"?
            <>
                <p>Name: {info.name}</p>
                <p>Terrain: {info.terrain}</p>
                <p>Mass: {info.mass}</p>
            </>:
            category=="species"?   
            <>
                <p>Name: {info.name}</p>
                <p>Calssification: {info.classification}</p>
                <p>Language: {info.language}</p>
            </>:
            category=="films" ?
            <>
            <p>Title: {info.title}</p>
            <p>Release Date: {info.release_date}</p>
            <p>Producer: {info.producer}</p>
            </>:
            category=="vehicles" ?
            <>
            <p>Name: {info.name}</p>
            <p>Model: {info.model}</p>
            <p>Passengers: {info.passengers}</p>
            </>:
            category=="starships" ?
            <>
            <p>Name: {info.name}</p>
            <p>Model: {info.model}</p>
            <p>Passengers: {info.passengers}</p>
            </>:
            <h1>Wrong URL</h1>

        }
        </div>
    );
};


export default Display;