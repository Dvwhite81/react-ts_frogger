import { LevelObject, RowArray } from '../utils/types';
import Square from './Square';
import Obstacle from './Obstacle';

interface RowProps {
  level: LevelObject;
  isStarted: boolean;
  hasBeenPaused: boolean;
  speed: number;
  row: RowArray;
  rowIndex: number;
}

const Row = ({
  level,
  isStarted,
  hasBeenPaused,
  speed,
  row,
  rowIndex,
}: RowProps) => {
  const rowObstacle = level.obstacles[rowIndex];

  return (
    <div className="row" id={`row-${rowIndex}`}>
      {row.map((square, squareIndex) => {
        const squareId = `square-${rowIndex}-${squareIndex}`;
        return <Square key={squareIndex} square={square} squareId={squareId} />;
      })}

      {rowObstacle && (
        <Obstacle
          obstacle={rowObstacle}
          isStarted={isStarted}
          hasBeenPaused={hasBeenPaused}
          speed={speed}
        />
      )}
    </div>
  );
};

export default Row;
