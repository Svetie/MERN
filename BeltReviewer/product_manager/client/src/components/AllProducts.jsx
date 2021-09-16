import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link 
} from "react-router-dom";

const AllProducts = () => {

    const [ allProducts, setAllProducts ] = useState([]);

    const [ deleteClicked, setDeleteClicked ] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                setAllProducts(res.data.results);
            })
            .catch(err=>{
                console.log(err);
            })
    },[deleteClicked])

    const deleteClickHandler = (e, id) =>{
        console.log("deleting a product ", id)
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res =>{
                console.log('res after delete ', res)
                setDeleteClicked(!deleteClicked);
            })
            .catch(err =>{
                console.log('error is ', err)
            })
    }

    return (
        <div>
            <h1>All Products</h1>
            {
                allProducts.map((product, i)=>{
                    return <div key={i}>
                    <p ><Link to={`/${product._id}`} key={i}>{product.title}</Link> <Link to={`/${product._id}/edit`} className="btn btn-success">Edit</Link>  <button onClick={(e)=>deleteClickHandler(e, product._id)} className="btn btn-danger">Delete Product</button></p>
                    </div>
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