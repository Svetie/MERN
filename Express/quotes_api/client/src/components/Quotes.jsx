import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Quotes = () => {

    const [allQuotes, setAllQuotes] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/quotes")
        .then(res=>{
            console.log('response is ',res)
            console.log('res.data is ',res.data)
            console.log('res.data.data.data is ',res.data)
            setAllQuotes(res.data.results)
        })
        .catch(err=>{

        })
    },[])
    return (
        <div className="container">
            {
                allQuotes.map((quote, i)=> {
                    return <div key={i}>
                        <h5>Quote: {quote.content}</h5>
                        <p>Author: {quote.author}</p>
                    </div>
                })
            }
        </div>
    );
};

export default Quotes;