import React, { useState } from "react";
import { Form, Input } from "./input";
import Number from "./number";
import Greetings from "./Greetings";
import Count from "./components/Count";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import { TodosContextProvider } from "./context/TodosContext";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";

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
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
