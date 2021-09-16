import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ShowOne = () => {

    const history = useHistory();

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
    },[id])

    const deleteClickHandler = () =>{
        console.log("deleting a product ", product._id)
        axios.delete(`http://localhost:8000/api/products/${product._id}`)
            .then(res =>{
                console.log('res after delete ', res)
                history.push("/")
            })
            .catch(err =>{
                console.log('error is ', err)
            })
    }


    return (
        <div>
            <button onClick={deleteClickHandler} className="btn btn-primary">Delete Product</button>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            
        </div>
    );
};


export default ShowOne;