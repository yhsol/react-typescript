import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = [
    {
      id: 1,
      text: "contex1",
      done: true
    },
    {
      id: 2,
      text: "context2",
      done: true
    },
    {
      id: 3,
      text: "context3",
      done: false
    }
  ];
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
