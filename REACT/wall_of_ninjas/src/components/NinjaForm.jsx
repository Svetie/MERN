import React, { useState } from 'react';


const NinjaForm = () => {

    const [ formInfo, setFormInfo ] = useState({
        name: "",
        imgLink: "",
        numProj: "",
        favHobby: "",
        favColor: ""
    });

    const [listOfNinjas, setListOfNinjas] = useState([]); 

    const changeHandler = (e) =>{
        // console.log("You are changing input ", e.target.name, e.target.value);
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const addNinja = (e)=>{
        e.preventDefault();
        console.log('You are submitting the form');
        console.log(formInfo.name);
        setListOfNinjas([...listOfNinjas, formInfo]);
    }

    return (
        <div>
            <form onSubmit={(e)=>addNinja(e)}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="name" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Image Link:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="imgLink" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects</label>
                    <input onChange={(e)=>changeHandler(e)} type="number" name="numProj" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite hobby</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="favHobby" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Color:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="favColor" id="" className="form-control" />
                </div>               
                <input type="submit" className="btn btn-success" value="Add to wall of Ninjas" />
            </form>

            <hr />
            {
                listOfNinjas.map((ninja,i) =>{
                    return <div key={i} className="card" style={{width: "18rem", backgroundColor: ninja.favColor}}>
                    <img className="card-img-top" src={ninja.imgLink} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{ninja.name}</h5>
                        <p className="card-text">Favorite hobby: {ninja.favHobby}</p>
                    </div>
                    </div>
                } )
            }
        </div>
    );
};


export default NinjaForm;