/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

interface BoardLineProps {
  line: [number?];
}

const Box = styled.span`
  width: 100%;
  border: 1px solid gainsboro;
  transition: background-color 200ms;
  background-color: lemonchiffon;
  &:hover {
    background-color: lightsteelblue;
  }
`;

const BoardLine: React.FC<BoardLineProps> = ({ line }) => {
  return (
    <div css={styles.line}>
      {line.map((_, i) => (
        <Box key={`box-${i}`} />
      ))}
    </div>
  );
};

const styles = {
  line: css`
    width: 100%;
    height: 100%;
    display: flex;
  `,
};

export default BoardLine;
