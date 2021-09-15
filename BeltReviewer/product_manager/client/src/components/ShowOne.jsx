import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const ShowOne = () => {

    const [ product, setProduct ] = useState({});

    const { id } = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                setProduct(res.data.results);
            })
            .catch(err=>{
                console.log(err);
            })
    })


    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Price: {product.description}</p>
            
        </div>
    );
};


export default ShowOne;