import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const AllNinjas = (props) => {

    const { mode, fontColor } = props;

    const [ allNinjas, setAllNinjas] = useState([]);

    // variable to track changes in useEffect, so it rerenders when something is changed
    const [ deleteClicked, setDeleteClicked] = useState(false);

    // state variable for search
    let [ search, setSearch ] = useState("");

    // call the api upon rendering, save the array of ninjas
    useEffect(()=>{
        axios.get("http://localhost:8000/api/ninjas")
            .then(res => {
                console.log('res is ', res);
                setAllNinjas(res.data.results);
            })
            .catch(err => {
                console.log(err)
            })
    },[deleteClicked]) 

    const deleteClickHandler = (e, idOfNinja) =>{
        console.log("deleting a ninja ", idOfNinja)
        axios.delete(`http://localhost:8000/api/ninjas/${idOfNinja}`)
            .then(res =>{
                console.log('res after axios delete ', res)
                setDeleteClicked(!deleteClicked);
            })
            .catch(err =>{
                console.log('error is ', err)
            })
    }

    return (
        <div>
            <h4>All the Ninjas</h4>
            <form>
                <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search for a ninja"/>
            </form>
            {
                allNinjas.filter((ninja, i)=>{
                    return ninja.name.toLowerCase().includes(search.toLowerCase());
                }).map((ninja, i) => {
                    
                return <div key={i} className="card App-header" style={{ backgroundColor: mode, color: fontColor, width: "18rem"}}>
                    <div className="card-body ">
                        <h5 className="card-title"><Link to={`/ninja/${ninja._id}`}>{ninja.name}</Link></h5>
                        <p className="btn btn-success"><Link to={`/ninja/edit/${ninja._id}`}>Edit</Link> </p>
                        <p><button onClick={(e)=>deleteClickHandler(e, ninja._id)} className="btn btn-danger">Delete This Ninja</button></p>
                        <p className="card-text">Number of projects {ninja.numProjects}</p>
                        <img src={ninja.profilePicUrl} alt="" style={{width: "40%"}}/>
                    </div>
                </div>
                })
            }
            </div>
        
    );
};



export default AllNinjas;