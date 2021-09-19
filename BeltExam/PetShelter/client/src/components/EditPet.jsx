import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const EditPet = () => {

    // get id from route
    const { id } = useParams();

    // variable to store a pet object
    const [ pet, setPet ] = useState({});

    // history to redirect
    const history = useHistory();

    // variable to store erros
    const [ valErrors, setValErrors ] = useState({});

    // retrieve the pet from db and store in pet variable
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log('res one ninja ', res)
                setPet(res.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    },[id])

    // set values from the form to formInfo variable
    const changeHandler = (e) => {
        console.log('Changing things');
        console.log(e.target.name, e.target.value);
            // set the form
            setPet({
                ...pet,
                [e.target.name]:e.target.value
            })
    }

        // save updated pet to the database
        const submitHandler = (e) => {
            e.preventDefault();
            console.log('submitted form')
            axios.put(`http://localhost:8000/api/pets/${id}`, pet)
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
            <h3>Edit {pet.name}</h3>
            <Link to="/" className="btn btn-secondary">back to home</Link>
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={submitHandler}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="name">Pet Name:</label>
                    <input onChange={changeHandler} value={pet.name} type="text" name="name" className="form-control"  placeholder="Enter pet name"/>
                    <p className="text-danger">{valErrors.name ? valErrors.name.message : "" }</p>
                    </div>
                    <div className="form-group col-md-6">
                    <p>Skills (optional):</p>
                    <label for="skill1">Skill 1:</label>
                    <input onChange={changeHandler} value={pet.skill1} type="text" name="skill1" className="form-control" placeholder="Skills"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="type">Pet Type:</label>
                    <input onChange={changeHandler} value={pet.type} type="text" name="type" className="form-control"  placeholder="Enter pet type"/>
                    <p className="text-danger">{valErrors.type ? valErrors.type.message : "" }</p>
                    
                
                    </div>
                    <div className="form-group col-md-6">
                    <label for="skill2">Skill 2:</label>
                    <input onChange={changeHandler} value={pet.skill2} type="text" name="skill2" className="form-control" placeholder="Skills"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="description">Pet Description:</label>
                        <input onChange={changeHandler} value={pet.description} type="text" name="description" className="form-control"  placeholder="Description"/>
                        <p className="text-danger">{valErrors.description ? valErrors.description.message : "" }</p>
                
                    </div>
                    <div className="form-group col-md-6">
                        <label for="skill3">Skill 3:</label>
                        <input onChange={changeHandler} value={pet.skill3} type="text" name="skill3" className="form-control" placeholder="Skills"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Edit Pet</button>
            </form>
        </div>
    );
};


export default EditPet;