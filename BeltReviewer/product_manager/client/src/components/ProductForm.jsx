import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const ProductForm = () => {

    const history = useHistory();

    let [ formInfo, setFormInfo] = useState({
        title: null,
        price: null,
        description: null,
    })

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('form submitted');
        axios.post("http://localhost:8000/api/products", formInfo)
            .then(res=>{
                console.log('response is ', res)
                // history.push("/")
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div className="container">
            <h3>Product Manager</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label >Title</label>
                    <input onChange={changeHandler} type="text" className="form-control" name="title" placeholder="Enter title"/>
                </div>
                <div className="form-group">
                    <label >Price:</label>
                    <input onChange={changeHandler} type="number" step="any" className="form-control" name="price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="profilePicUrl">Description:</label>
                    <input onChange={changeHandler} type="text" className="form-control" name="description" placeholder="Enter description"/>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
                </form>
            
        </div>
    );
};

export default ProductForm;