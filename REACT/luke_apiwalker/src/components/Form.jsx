import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const From = () => {
    // store categories
    const [categories, setCategories] = useState([]);

    //
    const [formInfo, setFormInfo] = useState({
        category: 'people',
        id: ""
    })

    // initialize useHistory
    const history = useHistory();

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(res=> { 
            console.log('response is ',res)
            console.log(Object.keys(res.data))
            setCategories(Object.keys(res.data))
        })
        .catch(err=>console.log(err))
    },[])


    // to keep track of inputs in the form, updates the state variable
    const changeHandler = (e) =>{
        console.log("changing inputs")
        console.log(e.target.value) // info selected in the form
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
        console.log(formInfo);
        // redirect using useHistory
        history.push(`/${formInfo.category}/${formInfo.id}/`)

        // axios.get(`https://swapi.dev/api/${formInfo.category}/${formInfo.id}`)
        // .then(res=>{
        //     console.log(res.data);
        // })
        // .catch(err=>{
        //     console.log("Error occured!")
        //     console.log(err);
        // })
    }


    return (
        <div className="App container-sm">
            <form onSubmit={submitHandler} className="form-inline">
                <div className="row">
                    <div className="col-auto">
                        <label>Search for</label>
                    <select onChange={(e) =>changeHandler(e)} name="category" className="form-sele">
                        {
                            categories.map((cat,i)=>{
                                return <option key={i} value={cat}>{cat}</option>
                            })
                        }
                    </select>
                    </div>
                    <div className="col-auto">
                        <label>ID</label>
                        <input onChange={(e)=>changeHandler(e)} name="id" type="number" />
                    </div>
                    <div className="col-auto">
                        <input className="btn btn-success" type="submit" value="Search" />
                    </div>
                    
                </div>
            </form>
        </div>
    );
};

export default From;