import React, { useState } from "react";

function TodoForm() {
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: add list
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
