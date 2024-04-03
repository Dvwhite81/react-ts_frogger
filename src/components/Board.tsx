import { LevelType } from '../utils/types';
import Row from './Row';

interface BoardProps {
  currentLevel: LevelType;
}

const Board = ({ currentLevel }: BoardProps) => {
  const { level } = currentLevel;
  const { grid } = level;

  return (
    <div className="board">
      {grid.map((row, rowIndex) => (
        <Row key={rowIndex} row={row} rowIndex={rowIndex} />
      ))}
    </div>
  );
};

export default Board;
