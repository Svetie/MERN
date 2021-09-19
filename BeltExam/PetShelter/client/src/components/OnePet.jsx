import React,{ useEffect, useState } from 'react';
import {useParams} from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const OnePet = () => {

    // initialize history to redirect
    const history = useHistory();
    // id of pet to show/retrieve from db
    const { id } = useParams();
    // variable for pet
    const [ pet, setPet ] = useState({});

    // like a pet
    let [ likes, setLikes ] = useState(0);

    // get the pet from the db
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res=>{
            console.log('res one pet ', res);
            setPet(res.data.results);   // set the pet
        })

        .catch(err=>{
            console.log(err)    // errors
        })
    },[])

    const deleteClickHandler = (e, petId) =>{
        console.log("deleting a pet ", petId)
        axios.delete(`http://localhost:8000/api/pets/${petId}`)
            .then(res =>{
                console.log('res after axios delete ', res)
                history.push("/");
            })
            .catch(err =>{
                console.log('error is ', err)
            })
    }

    const toLike = () =>{
        setLikes(likes + 1);
        console.log('Likes are ',likes)
    }

    return (
        <div className="container">
            <h3>Details about {pet.name}</h3>
            <Link to="/" className="btn btn-secondary">back to home</Link>
            <button onClick={(e)=>deleteClickHandler(e, pet._id)} className="btn btn-danger ml-3">Adopt {pet.name}</button>
                                
            <div style={{width: "50%", margin: "0px auto"}}>
            <div class="row">
                <div class="col">
                    <h5>Pet Type: </h5>
                </div>
                <div class="col">
                    {pet.type}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h5>Description: </h5>
                </div>
                <div class="col">
                    {pet.description}
                </div>
            </div>
            
            {
                // if skills exist
                pet.skill1 || pet.skill2 || pet.skill3 ?
                <div class="row">
                    <div class="col">
                        <h5>Skills: </h5>
                    </div>
                    <div class="col">
                        <p>{pet.skill1 ? pet.skill1 : ""}</p>
                        <p>{pet.skill2 ? pet.skill2 : ""}</p>
                        <p>{pet.skill3 ? pet.skill3 : ""}</p>
                    </div>
                </div> : ""
            }
            <button onClick={toLike} className="btn btn-success">Like pet</button>
            <p>Likes {likes}</p>
            </div>
        </div>
    );
};

export default OnePet;