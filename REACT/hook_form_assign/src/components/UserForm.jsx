import React, { useState } from 'react';


const UserForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const createUser = (e)=>{
    //     e.preventDefault();
    //     const newUser = { firstName, lastName, email, password, confirmPassword };
    // }
    
    return (
        <div>
            <form>
            {/* <form onSubmit={ createUser }> */}
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                {
                    firstName != "" ?
                    firstName.length < 3 || firstName.length > 20 ?
                        <p className="text-danger">Name must be between 2-20 characters</p>
                        : ""
                    : ""
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                {
                    lastName != "" ?
                    lastName.length < 3 || lastName.length > 20 ?
                        <p className="text-danger">Name must be between 2-20 characters</p>
                        : ""
                    : ""
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                {
                    email != "" ?
                    email.length < 5 ?
                        <p className="text-danger">Email must be at least 5 characters</p>
                        : ""
                    : ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
                {
                    password != "" ?
                    password.length < 8 ?
                        <p className="text-danger">Password must be at least 8 characters</p>
                        : ""
                    : ""
                }
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                {
                    confirmPassword != "" ?
                    confirmPassword.length < 8  || password !== confirmPassword ?
                        <p className="text-danger">Password must be at least 8 characters and the passwords mush match</p>
                        : ""
                    : ""
                }
            </div>
            <input type="submit" value="Create User" />
            </form>
            <h3>Your form data</h3>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>

        </div>
    );
};


export default UserForm;