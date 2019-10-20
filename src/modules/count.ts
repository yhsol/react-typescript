const INCREASE = "count/INCREASE" as const;
const DECREASE = "count/DECREASE" as const;
const INCREASE_BY = "count/INCREASE_BY" as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});

type CountAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

type CountState = {
  count: number;
};

const initialState: CountState = {
  count: 0
};

function countStore(state: CountState = initialState, action: CountAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default countStore;
