import React,{ useEffect, useState } from 'react';
import {useParams} from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const OneNinja = () => {

    const history = useHistory();

    const { id } = useParams();

    const [ninja, setNinja] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
            .then(res=>{
                console.log('res one ninja ', res)
                setNinja(res.data.results)
            })

            .catch(err=>{
                console.log(err)
            })
    },[])

    const deleteClickHandler = () =>{
        console.log("deleting a ninja ", ninja._id)
        axios.delete(`http://localhost:8000/api/ninjas/${ninja._id}`)
            .then(res =>{
                console.log('res after axios delete ', res)
                history.push("/")
            })
            .catch(err =>{
                console.log('error is ', err)
            })
    }

    return (
        <div>
            <button onClick={deleteClickHandler} className="btn btn-danger">Delete This Ninja</button>
            <h1>Info about Ninja {id}</h1>
            <h2>{ninja.name}</h2>
            <h2>Number of project {ninja.numProjects}</h2>
            <h2>Graduation date {ninja.graduationDate}</h2>
            <img src={ninja.profilePicUrl} alt='picture of ${ninja.name}' style={{width: "40%"}}/>

        </div>
    );
};


export default OneNinja;