import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { increase, decrease } from "../modules/count";
import { useCallback } from "react";

export default function useCount() {
  const count = useSelector((state: RootState) => state.countStore.count);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback((diff: number) => dispatch(diff), [
    dispatch
  ]);

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy
  };
}
