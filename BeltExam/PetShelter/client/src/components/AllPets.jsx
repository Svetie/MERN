import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const AllPets = () => {

    // store all pets
    const [ allPets, setAllPets ] = useState([]);

    // deleted flag
    const [ deletedClicked, setDeletedClicked ] = useState(false);

    // call api upon rendering, save the info from db to allPets array
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/sorted/bytype")
            .then(res=>{
                console.log('res in allpets is ', res);
                setAllPets(res.data.results); // set all pets array
            })
            .catch(err=>{
                console.log(err);   // catch and log errors
            })

    },[deletedClicked])

    return (
        <div className="container">
            <Link to="/pets/new" className="btn btn-info" style={{float: "right"}}>add a pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                
                    {
                        allPets.map((pet, i)=>{ 
                            return <tbody>
                            <tr key={i}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}`} className="btn btn-success">Details</Link> 
                                    <Link to={`/pets/${pet._id}/edit`} className="btn btn-primary ml-3">Edit</Link> 
                                    {/* <button onClick={(e)=>deleteClickHandler(e, pet._id)} className="btn btn-danger ml-3">Delete</button> */}
                                </td>
                            </tr>
                            </tbody>
                        })
                    }
                
            </table>            
        </div>

    );
};

export default AllPets;