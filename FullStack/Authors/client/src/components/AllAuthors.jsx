import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const AllAuthors = () => {

    const [ deleteClicked, setDeleteClicked ] = useState(false);


    // all authors
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(res=>{
                setAllAuthors(res.data.results);
            })
            .catch(err=>{
                console.log(err);
            })
    },[deleteClicked])

    const deleteClickHandler = (e, idOfAuthor) =>{
        console.log('deleting author ', idOfAuthor);
        axios.delete(`http://localhost:8000/api/authors/${idOfAuthor}`)
            .then(res=>{
                console.log('res after deletion ', res);
                setDeleteClicked(!deleteClicked);
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            <Link to="/new" className="btn btn-primary">Add an author</Link>
            <h3>We have quotes by: </h3>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                
                    {
                        allAuthors.map((author, i)=>{ 
                            return <tbody>
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/edit/${author._id}`} className="btn btn-success">Edit</Link> 
                                    <button onClick={(e)=>deleteClickHandler(e, author._id)} className="btn btn-danger ml-3">Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        })
                    }
                
            </table>
        </div>
    );
};


export default AllAuthors;