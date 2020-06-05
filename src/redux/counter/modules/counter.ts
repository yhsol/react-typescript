// action type
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

type IncreaseByProps = {
  diff: number;
  diffstr: string;
};

// action creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = ({ diff, diffstr }: IncreaseByProps) => ({
  type: INCREASE_BY,
  payload: {
    diff,
    diffstr,
  },
});

// type for action
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// state type and initial state
type CounterState = {
  count: number;
  countstr?: string;
};

const initialState: CounterState = {
  count: 0,
  countstr: "",
};

// reducer
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return {
        count: state.count + action.payload.diff,
        countstr: action.payload.diffstr,
      };
    default:
      return state;
  }
}

export default counter;
