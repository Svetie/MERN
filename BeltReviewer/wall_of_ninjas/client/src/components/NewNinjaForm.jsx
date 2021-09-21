import axios from 'axios';
import React, {useState } from 'react';
import {useHistory} from 'react-router-dom';


const NewNinjaForm = () => {

    const history = useHistory();

    let [ formInfo, setFormInfo] = useState({
        name: null,
        numProjects: null,
        graduationDate: null,
        isVeteran: false,
        profilePicUrl: null
    })

    let [valErrors, setValErrors] = useState({});

    const changeHandler = (e) => {
        console.log('Changing things');
        console.log(e.target.name, e.target.value);
        if(e.target.type == "checkbox"){
            setFormInfo({
                ...formInfo,
                isVeteran: !formInfo.isVeteran
            })
            
        } else {
            // update state for all by checkbox
            setFormInfo({
                ...formInfo,
                [e.target.name]:e.target.value
            })
        }
    }


    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submitted form')
        axios.post("http://localhost:8000/api/ninjas", formInfo)
            .then(res=>{
                console.log('response at submit form', res)
                if(res.data.err){
                    // do not redirect if errors
                    // store the error object
                    console.log(res.data.err.errors);
                    setValErrors(res.data.err.errors);
                } else {
                    history.push("/") // this is redirect
                }
                
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            <h3>Create a new ninja</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label >Name</label>
                    <input onChange={changeHandler} type="text" className="form-control" name="name" placeholder="Enter name"/>
                    <p className="text-danger">{valErrors.name? valErrors.name.message : ""}</p>
                </div>
                <div className="form-group">
                    <label >Number of Projects</label>
                    <input onChange={changeHandler} type="number" className="form-control" name="numProjects"/>
                    <p className="text-danger">{valErrors.numProjects ?valErrors.numProjects.message: ""}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="graduationDate">Graduation Date:</label>
                    <input onChange={changeHandler} type="date" className="form-control" name="graduationDate" placeholder="Password"/>
                    <p className="text-danger">{valErrors.graduationDate ?valErrors.graduationDate.message: ""}</p>
                </div>

                <div className="form-check">
                    <label className="form-check-label" htmlFor="isVeteran">Is Veteran: </label>
                    <input onChange={changeHandler} type="checkbox" className="" name="isVeteran"/>
                </div>

                <div className="form-group">
                    <label htmlFor="profilePicUrl">Profile pic link</label>
                    <input onChange={changeHandler} type="text" className="form-control" name="profilePicUrl" placeholder="Enter pic link"/>
                    <p className="text-danger">{valErrors.profilePicUrl?.message}</p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    );
};


export default NewNinjaForm;