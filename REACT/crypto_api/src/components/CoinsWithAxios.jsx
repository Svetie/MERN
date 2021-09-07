import React, { useState } from 'react';
import axios from 'axios';

const CoinsWithAxios = () => {

    const [allCoins, setAllCoins] = useState([]);
    // const [allPokemon, setAllPokemons] = useState([]);

    const clickHandler = ()=>{
        console.log("clicked!")
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        //.then() means when the responseponse is recieved back successfully from the api call, what to do with it
        .then(response=>{
            console.log("the response looks like this")
            console.log(response)

            // sort in ascending order
            // response.sort(function (a,b) {
            //     return a.current_price - b.current_price;
            // })

            // sort in descending order
            response.data.sort(function (a,b) {
                return b.current_price - a.current_price;
            })

            setAllCoins(response.data);
            // pokemon response.results
            // setAllPokemon(response.results)
        })
        .catch(err=>{
            console.log(err)
        }) //.catch() means if there were any errors that came up in our api request, this is where we will handle those errors
    }


    return (
        <div>
            <button onClick={clickHandler} className="btn btn-success">Show me the money!</button>
        {
        allCoins.map((coin, i)=>{
            return <div key={i} className="card" style={{backgroundImage: `url(${coin.image})`}}>
                <div className="card-body">
                <h5 style={{textShadow: "white 1px 0 10px"}}className="card-title">{coin.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">${coin.current_price}</h6>
                </div>
            </div>
        })
        }

        </div>
    );
};


export default CoinsWithAxios;