import React, { useState } from "react";
import { Form, Input } from "./input";
import Number from "./number";
import Greetings from "./Greetings";

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

  const onClick = (name: string) => console.log(`${name} says hello`);

  return (
    <>
      {/* <Form onFormSubmit={onFormSubmit}>
        <Input value={value} onChange={onChange} />
      </Form>
      <div>{counter}</div> */}
      <Number counter={counter} />
      <Greetings name={"hansol"} mark={"!"} onClick={onClick} />
      <button onClick={add}>+</button>
    </>
  );
};

export default App;
