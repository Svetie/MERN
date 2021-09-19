import axios from 'axios';
import React, {useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

const NewPet = () => {

    // history for redirect
    const history = useHistory();

    // store validation errors
    let [valErrors, setValErrors] = useState({});

    // variable to store the data from form
    let [ formInfo, setFormInfo] = useState({
        name: null,
        type: null,
        description: null,
        skill1: "",
        skill2: "",
        skill3: ""
    });


    // set values from the form to formInfo variable
    const changeHandler = (e) => {
        console.log('Changing things');
        console.log(e.target.name, e.target.value);
            // set the form
            setFormInfo({
                ...formInfo,
                [e.target.name]:e.target.value
            })
    }

    // save new pet to the database
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submitted form')
        axios.post("http://localhost:8000/api/pets", formInfo)
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
        <div className="container">
            <Link to="/" className="btn btn-secondary">back to home</Link>
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={submitHandler}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="name">Pet Name:</label>
                    <input onChange={changeHandler} type="text" name="name" className="form-control"  placeholder="Enter pet name"/>
                    <p className="text-danger">{valErrors.name? valErrors.name.message : ""}</p>
                    </div>
                    <div className="form-group col-md-6">
                    <p>Skills (optional):</p>
                    <label for="skill1">Skill 1:</label>
                    <input onChange={changeHandler} type="text" name="skill1" className="form-control" placeholder="Skills"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="type">Pet Type:</label>
                    <input onChange={changeHandler} type="text" name="type" className="form-control"  placeholder="Enter pet type"/>
                    <p className="text-danger">{valErrors.type? valErrors.type.message : ""}</p>
                
                    </div>
                    <div className="form-group col-md-6">
                    <label for="skill2">Skill 2:</label>
                    <input onChange={changeHandler} type="text" name="skill2" className="form-control" placeholder="Skills"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="description">Pet Description:</label>
                        <input onChange={changeHandler} type="text" name="description" className="form-control"  placeholder="Description"/>
                        <p className="text-danger">{valErrors.description? valErrors.description.message : ""}</p>
                
                    </div>
                    <div className="form-group col-md-6">
                        <label for="skill3">Skill 3:</label>
                        <input onChange={changeHandler} type="text" name="skill3" className="form-control" placeholder="Skills"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add Pet</button>
            </form>
        </div>
    );
};

export default NewPet;