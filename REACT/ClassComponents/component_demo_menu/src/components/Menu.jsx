import React, { Component } from "react";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numMeals: this.props.numMeals   //this can change
        };
    }

    render(){

        // component has a variable unique to the
        // instance of that component, then we will use
        // a state variable
        const doSomething = () =>{
            console.log(`You clicked ${this.props.dishName}`);
            // this.state.numMeals++;
            //{ this.state.position = "Off" } }>Flip Switch
            this.setState({numMeals: this.state.numMeals+1})
        }
         // <></> // empty expression
        return (
            <>
            <div className="menuItem">
                <h3>Dish name: {this.props.dishName}</h3>
                <h5>Price: {this.props.price}</h5>
                <div>Description: {this.props.children}</div>
                <p>Number of Meals: {this.state.numMeals}</p>
                <p><button onClick={doSomething}>Serve Meal</button></p>
            </div>
            </>
        )
    }
}

export default Menu;