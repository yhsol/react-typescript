import React, { useState } from "react";

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const add = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div>{counter}</div>
      <button onClick={add}>+</button>
    </>
  );
};

export default App;
