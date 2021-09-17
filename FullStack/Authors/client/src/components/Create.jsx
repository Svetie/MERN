import axios from 'axios';
import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom';

const Create = () => {
    const history = useHistory();

    const [ author, setAuthor ] = useState({
        name: null
    });

    const [valErrors, setValErrors] = useState({});

    const changeHandler = (e) =>{
        console.log('Changing things');
        setAuthor({
            ...author,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log('submitting the form');
        axios.post("http://localhost:8000/api/authors", author)
            .then(res=>{
                if(res.data.err){
                    console.log(res.data.err.errors);
                    setValErrors(res.data.err.errors);
                } else {
                    history.push("/")
                }
            })
            .catch(err=>{
                console.log(err)
            })
    }



    return (
        <div>
            <Link to="/" className="btn btn-warning">Home</Link> 
            <h3>Add a new author:</h3>
            <form onSubmit={submitHandler} style={{border: "1px solid black"}}>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input onChange={changeHandler} type="text" className="form-control" placeholder="Enter name" name="name" style={{width: "50%", margin: "0px auto"}}/>
                    <p className="text-danger">{valErrors.name? valErrors.name.message : ""}</p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-info ml-3">Cancel</Link>
            </form>
                
        </div>
    );
};


export default Create;