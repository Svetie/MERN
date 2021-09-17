import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useHistory, useParams, Link} from 'react-router-dom';

const Edit = () => {

    const { id } = useParams();

    const [ author, setAuthor ] = useState({});

    const history = useHistory();

    const [valErrors, setValErrors] = useState({});


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                console.log('res one author ', res)
                setAuthor(res.data.results)
            })

            .catch(err=>{
                console.log(err)
            })
    },[id])

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
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
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
            <h3>Edit this author:</h3>
            <form onSubmit={submitHandler} style={{border: "1px solid black"}}>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input onChange={changeHandler} type="text" className="form-control" value={author.name} name="name" style={{width: "50%", margin: "0px auto"}}/>
                    <p className="text-danger">{valErrors.name? valErrors.name.message : ""}</p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-info ml-3">Cancel</Link>
            </form>
        </div>
    );
};

export default Edit;