import React, { useState, useReducer } from "react";

interface Props {}

type Todos = { id: number; text: string; done: boolean };

type Action = { type: "INCREASE" } | { type: "DECREASE" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("error!");
  }
}

function Count() {
  // const [count, setCount] = useState<number>(0);
  // const onDecrease = () => setCount(count - 1);
  // const onIncrease = () => setCount(count + 1);

  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

  const [todos, setTodos] = useState<Todos[] | null>([]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Count;
