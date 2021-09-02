import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PetForm = () => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [picLink, setPicLink] = useState("");

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input onChange= {(e)=>setName(e.target.value)} type="text" className="form-control">
                    </input>
                </div>
                <div className="form-group">
                    <label>Type:</label>
                    <input onChange= {(e)=>setType(e.target.value)} type="text" className="form-control">
                    </input>
                </div>
                <div className="form-group">
                    <label>Service requested:</label>
                    <select onChange= {(e)=>setService(e.target.value)} className="form-control">
                        <option value="Wash">Regular grooming (Wash)</option>
                        <option value="Haircut">Haircut</option>
                        <option value="BetterLife">My pet lives better than you</option>
                    </select>
                </div>
                <div onChange= {(e)=>setDate(e.target.value)} className="form-group">
                    <label>Date:</label>
                    <input type="date" className="form-control">
                    </input>
                </div>
                <div className="form-group">
                    <label>Picture link:</label>
                    <input onChange= {(e)=>setPicLink(e.target.value)} type="text" className="form-control">
                    </input>
                </div>
                <input type="submit" value="Make Appointment"/>
            </form>

            <h3>Your pet info</h3>
            <div>
                <p>Name: {name}</p>
                <p>Type: {type}</p>
                <p>Service: {service}</p>
                <p>Date: {date}</p>
                <p>Picture: <img src={picLink} alt="pic of pet" height="80px"/></p>
            </div>
        </div>
    );
};


export default PetForm;