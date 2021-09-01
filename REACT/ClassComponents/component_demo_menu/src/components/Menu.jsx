import React, { Component } from "react";

class Menu extends Component {
    render(){
         // <></> // empty expression
        return (
            <>
            <div className="menuItem">
                <h3>Dish name: {this.props.dishName}</h3>
                <h5>Price: {this.props.price}</h5>
                <p>Description: {this.props.children}</p>
            </div>
            </>
        )
    }
}

export default Menu;