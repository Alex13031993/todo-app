import { useState } from "react";
import { ITodos } from "./todo_types";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodos[]>([]);

  const addTodo = () => {
    const todoItem: ITodos = {
    id: Math.floor(Math.random() * 100),
    title: value,
    checked: false
  }
    setTodos([...todos, todoItem])
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo: ITodos) => todo.id !== id))
  }

  return ( 
    <>
      Лист с тасками
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      {
        todos.map((item: ITodos) => {
          return (
            <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} />
          )
        })
      }
    </>
   );
}
