import React from "react";
import ReactDOM from "react-dom";
import * as wasm from "mineskeeper";
import "./styles/index.css";

import { Header } from "./components/Header";
import BoardLine from "./components/BoardLine";

// function createEmptyBoard(n: number) {
//   let board: [[number?]?] = [];
//   for (let i = 0; i <= n; i++) {
//     board.push([]);
//     for (let j = 0; j <= n; j++) {
//       board[i]?.push(0);
//     }
//   }
//   return board;
// }

const App: React.FC<{}> = () => {
  const board = wasm.create_board(10);

  console.log({board})
  return (
    <div className="app">
      <header>
        <Header>Mineskeeper</Header>
      </header>
      <main>
        {board.map((line = [], i: number) => (
          <BoardLine key={`line-${i}`} line={line} />
        ))}
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
