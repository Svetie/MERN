import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Edit = () => {

    const {id } = useParams();
    const [ ninja, setNinja ] = useState({});
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
            .then(res=>{
                console.log('res one ninja ', res)
                setNinja(res.data.results)
            })

            .catch(err=>{
                console.log(err)
            })
    },[id])

    const changeHandler = (e) => {
        console.log('Changing things inside edit');
        console.log(e.target.name, e.target.value);
        if(e.target.type == "checkbox"){
            setNinja({
                ...ninja,
                isVeteran: !ninja.isVeteran
            })
            
        } else {
            // update state for all by checkbox
            setNinja({
                ...ninja,
                [e.target.name]:e.target.value
            })
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/ninjas/${id}`, ninja) // needs route and body
            .then(res=>{
                console.log('response after put ', res)
                history.push(`/ninja/${id}`)

            })
            .catch(err =>{
                console.log(err);
            })
    }
    
    return (
        <div>
            <h1>Edit Ninja</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label >Name</label>
                    <input onChange={changeHandler} type="text" className="form-control" name="name" value={ninja.name}/>
                    {/* <p className="text-danger">{valErrors.name? valErrors.name.message : ""}</p> */}
                </div>
                <div className="form-group">
                    <label >Number of Projects</label>
                    <input onChange={changeHandler} type="number" className="form-control" name="numProjects" value={ninja.numProjects}/>
                    {/* <p className="text-danger">{valErrors.numProjects ?valErrors.numProjects.message: ""}</p> */}
                </div>

                <div className="form-group">
                    <label htmlFor="graduationDate">Graduation Date:</label>
                    <input onChange={changeHandler} type="date" className="form-control" name="graduationDate" value={ninja.graduationDate}/>
                    {/* <p className="text-danger">{valErrors.graduationDate ?valErrors.graduationDate.message: ""}</p> */}
                </div>

                <div className="form-check">
                    <label className="form-check-label" htmlFor="isVeteran">Is Veteran: </label>
                    <input onChange={changeHandler} type="checkbox" className="" name="isVeteran" checked={ninja.isVeteran}/>
                </div>

                <div className="form-group">
                    <label htmlFor="profilePicUrl">Profile pic link</label>
                    <input onChange={changeHandler} type="text" className="form-control" name="profilePicUrl" value={ninja.profilePicUrl}/>
                    {/* <p className="text-danger">{valErrors.profilePicUrl?.message}</p> */}
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
                </form>
        </div>
    );
};

export default Edit;