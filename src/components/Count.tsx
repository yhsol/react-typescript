import React from "react";
import useCount from "../hooks/useCount";

type CountProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

// useCount 는 state 값들을 가져오는 hooks 이고,
// 이것을 사용함으로써 해당 상태값들을 props 로 가져오지 않아도 된다.
// withRouter 등을 사용할 때도 이 방법을 사용하면 간단하게 해결 가능 할 듯.
// 이렇게 쓰는 방법을 한번 해 봐야겠다.

function Count() {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCount();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default Count;
