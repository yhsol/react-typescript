import React, { useState } from "react";
import { Form, Input } from "./input";
import Number from "./number";
import Greetings from "./Greetings";
import Count from "./Count";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import TodoForm from "./Todo/TodoForm";
import TodoList from "./Todo/TodoList";

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

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <Count />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
