import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import CounterContainer from "./redux/counter/CounterContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
    </div>
  );
}

export default App;
