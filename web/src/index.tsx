import * as wasm from "mineskeeper";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
const App = () => {
  const board = wasm.create_board(100);
  console.log(board);
  return (
    <div>
      <h1>Mineskeeper</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
