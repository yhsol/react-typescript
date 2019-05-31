import React, { useState } from "react";
import { Form, Input } from "./input";

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  const add = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <Form onFormSubmit={onFormSubmit}>
        <Input value={value} onChange={onChange} />
      </Form>
      <div>{counter}</div>
      <button onClick={add}>+</button>
    </>
  );
};

export default App;
