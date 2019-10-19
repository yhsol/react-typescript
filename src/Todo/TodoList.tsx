import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = [
    {
      id: 1,
      text: "learn context",
      done: true
    },
    {
      id: 2,
      text: "learn context2",
      done: true
    },
    {
      id: 3,
      text: "learn context3",
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
