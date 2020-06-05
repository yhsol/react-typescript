import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./modules";
import { decrease, increase, increaseBy } from "./modules/counter";
import Counter from "./Counter";

type IncreaseByProps = {
  diff: number;
  diffstr: string;
};

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counter.count);
  const countstr = useSelector((state: RootState) => state.counter.countstr);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = ({ diff, diffstr }: IncreaseByProps) => {
    dispatch(increaseBy({ diff, diffstr }));
  };
  return (
    <Counter
      count={count}
      countstr={countstr}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;
