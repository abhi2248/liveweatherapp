import React from "react";
const TodoList = (props) =>{
  return(
    <>
    <div>
    <i class="fa-solid fa-trash-can"
    onClick={()=>{
   props.onSelect(props.id);
    }}></i>

      <li>{props.text}</li>
      </div>
      </>
  );
};
export default TodoList;