import React, { useState } from 'react';

function ToDoItem(props) {
    //Keep tracked of the Clicked state of the ToDoItem
    const [isClicked, setIsClicked] = useState(false);
    //Keep track of the ToDoItem text decoration. Initialize to none, because items start as incomplete.
    
    function handleClick() {
        return props.onChecked;
    }

    return (
    <div><li onClick={handleClick} >{props.text}</li></div> );
}

export default ToDoItem;