import React, { useState } from "react";
import ToDoItem from "./ToDoItem";


function App() {
  const [inputText, setInputText] = useState("");
  // items is a stateful array, initialized to an empty array.
  const [items, setItems] = useState([]);

  // handleChange is a function that takes an event as an argument. The event is the user's input. As the user types, the inputText state is updated.
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      // Using the Spread Operator
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
      // console.log("Triggered deleteItem on item ");
      //console.log(id);
      setItems(prevItems => {
        // Filter out the item with the given id
        // We are returning a new array of items with the specific item missing.
          return prevItems.filter((item, index) => {
              return index !== id;
          });
      });

  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem}
            />))}
        </ul>
      </div>
    </div>
  );
}

export default App;