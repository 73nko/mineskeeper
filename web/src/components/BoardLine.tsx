import React from "react";
// import styled from "@emotion/styled";

interface BoardLineProps {
  line: [number?];
}

// const Box = styled.span`
//   width: 100%;
//   border: 1px solid gainsboro;
//   transition: background-color 200ms;
//   background-color: lemonchiffon;
//   &:hover {
//     background-color: lightsteelblue;
//   }
// `;

const BoardLine: React.FC<BoardLineProps> = ({ line }) => {
  return (
    <div>
      {line.map((val) => (
        <span>{val}</span>
      ))}
    </div>
  );
};

export default BoardLine;
