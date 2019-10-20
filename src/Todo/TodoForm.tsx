import React, { useState } from "react";
import { useTodosDispatch } from "../context/TodosContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      text: value
    });
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        placeholder={"write something!"}
        onChange={e => setValue(e.target.value)}
      />
      <button>click!</button>
    </form>
  );
}

export default TodoForm;
