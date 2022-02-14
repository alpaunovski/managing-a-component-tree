import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function ToDoItem(props) {
    //Keep tracked of the Clicked state of the ToDoItem
    const [isClicked, setIsClicked] = useState(false);
    //Keep track of the ToDoItem text decoration. Initialize to none, because items start as incomplete.
    const [style, setStyle] = useState({
        textDecoration: "none", });
    //Handle the Click event of the ToDoItem
    function handleClick(event) {
    //If the item is not clicked, set the clicked state to true and the text decoration to line-through.    
        if (!isClicked) {
            setIsClicked(true);
            setStyle({
                textDecoration: "line-through",
            });
    //Reverse the logic. If the item is clicked again and isClicked is true, set the clicked state to false and the text decoration to none.        
        } else {
            setIsClicked(false);
            setStyle({
                textDecoration: "none",
            });
        }
    }

    return (
    <div key={uuidv4}><li onClick={handleClick} style={style}>{props.text}</li></div> );
}

export default ToDoItem;