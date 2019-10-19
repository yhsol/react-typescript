import React, { useState } from "react";

function TodoForm() {
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
