import React from "react";
import ReactDOM from "react-dom";
// import * as wasm from "mineskeeper";
import "./styles/index.css";

import BoardLine from "./components/BoardLine";

function createEmptyBoard(n: number) {
  let board: [[number?]?] = [];
  for (let i = 0; i <= n; i++) {
    board.push([]);
    for (let j = 0; j <= n; j++) {
      board[i]?.push(0);
    }
  }
  return board;
}

const App: React.FC<{}> = () => {
  const board = createEmptyBoard(100);

  return (
    <div className="app">
      <main>
        {board.map((line = []) => (
          <BoardLine line={line} />
        ))}
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
