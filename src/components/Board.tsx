import { LevelType } from '../utils/types';
import Row from './Row';

interface BoardProps {
  currentLevel: LevelType;
  isStarted: boolean;
  hasBeenPaused: boolean;
}

const Board = ({ currentLevel, isStarted, hasBeenPaused }: BoardProps) => {
  const { id, level } = currentLevel;
  const speed = 100 * (id / 10);

  return (
    <div className="board">
      {level.grid.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          level={level}
          isStarted={isStarted}
          hasBeenPaused={hasBeenPaused}
          speed={speed}
          row={row}
          rowIndex={rowIndex}
        />
      ))}
    </div>
  );
};

export default Board;
