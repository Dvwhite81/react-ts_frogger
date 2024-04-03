import { LevelType } from '../utils/types';
import Row from './Row';

interface BoardProps {
  currentLevel: LevelType;
}

const Board = ({ currentLevel }: BoardProps) => {
  const { level } = currentLevel;

  return (
    <div className="board">
      {level.grid.map((row, rowIndex) => (
        <Row key={rowIndex} level={level} row={row} rowIndex={rowIndex} />
      ))}
    </div>
  );
};

export default Board;
