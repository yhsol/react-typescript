import { createContext, Dispatch, useReducer, useContext } from "react";

// context
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type TodosState = Todo[];
// todolist 에 들어가는 항목을 type 정의하고, 그 값을 다시 배열로 정의.

const TodosStateContext = createContext<TodosState | undefined>(undefined);
// context 의 값에 todo 배열을 넣고, 해당 값이 없을 때 undefinded 로 함을 명시.

type Action =
  | { type: "CREATE"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };

type TodosDispatch = Dispatch<Action>;
// dispatch 값도 타입을 지정함으로써 추론 가능하게 함.
const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined
);

// reducer

function todosReducer(state: TodosState, action: Action): TodosState {
  // state 와 reducer 의 타입을 같게 함.
  switch (action.type) {
    case "CREATE":
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        done: false
      });
    case "TOGGLE":
      return state.map(
        todo => (todo.id === action.id ? { ...todo, done: !todo.done } : todo)
        // 비구조화 할당으로 todo 는 그대로 가져오 되,
        // todo.id 와 action.id 값이 같을 때만 done 의 값 변경.
        // 아닌 경우 그대로 todo 리턴.
      );
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    //   todo.id 와 action.id 가 같지 않은 경우만 filter 해서 보여줌.
    default:
      throw new Error("Error!");
  }
}

// provider

export function TodoosContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todosReducer, [
    {
      id: 1,
      text: "context1",
      done: true
    },
    {
      id: 2,
      text: "context2",
      done: true
    },
    {
      id: 3,
      text: "context3",
      done: false
    }
  ]);
  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

export function useTodosState() {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error("TodosProvider not found");
  return state;
}

export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error("TodosProvider not found");
  return dispatch;
}
