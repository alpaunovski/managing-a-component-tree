import React from 'react';

function ToDoItem(props) {

    //Keep track of the ToDoItem text decoration. Initialize to none, because items start as incomplete.

    return (
    <div onClick={() => {props.onChecked(props.id)}}><li>{props.text}</li></div> );
}

export default ToDoItem;