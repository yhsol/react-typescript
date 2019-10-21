import React from "react";

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
}

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span>{todo.text}</span>
      <span>X</span>
    </li>
  );
}

export default TodoItem;
