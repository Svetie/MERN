import React, { useState } from 'react';

const Person = (props) => {

    const [age, setAge] =useState(props.age);

    const happyBday = () =>{
        setAge(age+1);
    }


    return (
        <div>
            <h1>{ props.lastName }, { props.firstName}  </h1>
                <p>Age: {age} </p>
                <p>Hair Color: { props.hairColor } </p>
                <p><button onClick={happyBday}>Birthday Button for {props.firstName} {props.lastName}</button></p>
        </div>
    );
};


export default Person;