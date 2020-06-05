import React from "react";

type IncreaseByProps = {
  diff: number;
  diffstr: string;
};

type CounterProps = {
  count: number;
  countstr?: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: ({ diff, diffstr }: IncreaseByProps) => void;
};

function Counter({
  count,
  countstr,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <h1>{countstr}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy({ diff: 5, diffstr: "five" })}>
        +1
      </button>
    </div>
  );
}

export default Counter;
