import React, { useState } from "react";
import { ITodos } from "./todo_types";

interface ITodo {
  deleteTodo: (id: number) => void;
  item: ITodos;
}

export const TodoItem: React.FC<ITodo> = ({ item, deleteTodo}) => {
  
  const [checked, setChecked] = useState(false);

  const CheckTodo = () => {
    setChecked(!checked);
  }

  return ( 
    <>
      <div key={item.id}>
        <p style={{textDecoration: checked ? 'line-through' : 'none'}}>{item.title}</p>
        <input type='checkbox' checked={checked} onChange={CheckTodo} />
        <button onClick={() => deleteTodo(item.id)}>Delete Todo</button>
      </div>
    </>
   );
}