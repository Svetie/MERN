import React, { useState } from 'react';

const Pokemon = () => {

    const [allPokemon, setAllPokemon] = useState([]);

    
    const clickHandler = ()=>{
        console.log("clicked!")
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response=>{
            return response.json()
            }) 
            .then(response=>{
            console.log("the response looks like this")
            console.log(response)
            console.log(response.results)

            response.results.sort((a, b) => a.name.localeCompare(b.name))

            // pokemon response.results
            setAllPokemon(response.results);
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