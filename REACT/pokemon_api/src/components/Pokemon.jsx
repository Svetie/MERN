import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {

    const [allPokemon, setAllPokemon] = useState([]);

    
    const clickHandler = ()=>{
        console.log("clicked!")
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response=>{
                
            console.log('the response is');
            console.log(response);
            console.log('the response.results is');
            console.log(response.data);
            console.log('the response.data.results is');
            console.log(response.data.results);


            response.data.results.sort((a, b) => a.name.localeCompare(b.name))

            // pokemon response.results
            setAllPokemon(response.data.results);
        })
        .catch(err=>{
            console.log(err)
        }) 
    }
    return (
        <div className="container">
            <button onClick={clickHandler} className="btn btn-dark">Fetch Pokemon</button>
            {
            allPokemon.map((pokemon, i) => {
                return <ul key={i} style={{margin: "0px auto", width: '30%'}}>
                    <li>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
                </ul>
            })   
            }
            
        </div>
    );
};

export default Pokemon;