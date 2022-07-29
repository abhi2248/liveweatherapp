
import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItem=(id)=>{
  console.log("deleted");
  setItems((oldItems)=>{
    return oldItems.filter((arrElem,index)=>{
     return index!==id; 
    })
  })
  };
  return (
    <>
      <div>
        <h1>To do list</h1>
        <input
          type="text"
          placeholder="Add a item"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listOfItem}>+</button>
        <ol>
          {items.map((itemVal,index) => {
           return <TodoList key={index} 
           id={index}
           text={itemVal}
           onSelect={deleteItem}
           />;
          })}
        </ol>
      </div>
    </>
  );
};
export default App;
