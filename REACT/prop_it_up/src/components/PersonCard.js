import React, { Component } from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age  //this can change
        };
    }

    render(){
        const { firstName, lastName, age, hairColor } = this.props;

        const happyBday = () =>{
            // console.log(`Age before is ${this.state.age}`);
            this.setState({age: this.state.age+1})
            // console.log(`Age after is ${this.state.age}`);
        }

        return(
            <div>
                <h1>{ lastName }, { firstName}  </h1>
                <p>Age: {this.state.age} </p>
                <p>Hair Color: { hairColor } </p>
                <p><button onClick={happyBday}>Birthday Button for {firstName} {lastName}</button></p>
            </div>
        );
    }
}

export default PersonCard;