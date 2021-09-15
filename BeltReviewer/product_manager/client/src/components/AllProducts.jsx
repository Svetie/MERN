import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link 
} from "react-router-dom";

const AllProducts = () => {

    const [ allProducts, setAllProducts ] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                setAllProducts(res.data.results);
            })
            .catch(err=>{
                console.log(err);
            })
    })

    return (
        <div>
            <h1>All Products</h1>
            {
                allProducts.map((product, i)=>{
                    let id = product._id;
                    let link = "/" + id;
                    return <p key={i}><Link to={link} key={i}>{product.title}</Link></p>
                })
            }

            {/* {
                product.map((item, i)=> {
                    return <SingleProduct key={i} data={item} />
                })
            } */}

            
        </div>
    );
};

export default AllProducts;