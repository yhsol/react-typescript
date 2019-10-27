import React, { useState } from "react";
import { Form, Input } from "./input";
import Number from "./number";
import Greetings from "./Greetings";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { TodosContextProvider } from "./contexts/TodosContext";
import Counter from "./components/Counter";
import TodoInsert from "./components/TodoInsert";

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
      <TodoInsert />
      <TodoList />
    </>
  );
};

export default App;
