import React from "react";
import "./Hello.css";
import { StoreState } from "../types/index";
import { connect, useDispatch, useSelector } from "react-redux";
import { IncrementEnthusiasm, DecrementEnthusiasm } from "../actions";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  const enthusiasmLevelState = useSelector(
    (state: StoreState) => state.enthusiasmLevel
  );
  const nameState = useSelector((state: StoreState) => state.languageName);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(IncrementEnthusiasm());
  };

  const onDecrement = () => {
    dispatch(DecrementEnthusiasm());
  };

  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;
