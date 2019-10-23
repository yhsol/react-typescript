import React, { useState } from "react";
import { useTodosDispatch } from "../../contexts/TodosContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: add list
    dispatch({
      type: "CREATE",
      text: value
    });
    setValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="write todo list!"
        onChange={e => setValue(e.target.value)}
      />
      <button>add!</button>
    </form>
  );
}

export default TodoForm;
