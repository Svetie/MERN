import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EditProduct = () => {

    // id of product from route params
    const { id } = useParams();
    const [ product, setProduct ] = useState({});
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log('res in edit ', res)
                setProduct(res.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    },[id])

    const changeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]:e.target.value
        })        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('edit form submitted');
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(res=>{
                console.log('response is ', res)
                history.push("/")
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div className="container">
            <h3>Edit Product</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label >Title</label>
                    <input onChange={changeHandler} type="text" className="form-control" name="title" value={product.title}/>
                </div>
                <div className="form-group">
                    <label >Price:</label>
                    <input onChange={changeHandler} type="number" step="any" className="form-control" name="price" value={product.price}/>
                </div>
                <div className="form-group">
                    <label htmlFor="profilePicUrl">Description:</label>
                    <input onChange={changeHandler} type="text" className="form-control" name="description" value={product.description}/>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
                </form>
            
        </div>
    );
};


export default EditProduct;