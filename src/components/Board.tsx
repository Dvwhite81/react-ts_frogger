import { LevelType } from '../utils/types';
import Row from './Row';

interface BoardProps {
  currentLevel: LevelType;
}

const Board = ({ currentLevel }: BoardProps) => {
  const { id, level } = currentLevel;
  const speed = 100 * (id / 10);

  return (
    <div className="board">
      {level.grid.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          level={level}
          speed={speed}
          row={row}
          rowIndex={rowIndex}
        />
      ))}
    </div>
  );
};

export default Board;
