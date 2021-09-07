import React, { useState } from 'react';

const Todo = (props) => {

    const todoClasses = ["bold", "italic"];

    if (props.todo.complete) {
        todoClasses.push("line-through");
    }

    return (
        <div>
            <span className={todoClasses.join(" ")}>{props.todo.text}</span>
            {/* needs and onChange */}
            <input onChange={(event)=> {
            props.handleToggleComplete(props.i);
            }} checked={props.todo.complete} type="checkbox" />
            <button onClick={(event) => {
            props.handleTodoDelete(props.i);
            }}>Delete</button>
        </div>
    );
};


export default Todo;