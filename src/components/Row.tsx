import { RowArray } from '../utils/types';
import Square from './Square';

interface RowProps {
  row: RowArray;
  rowIndex: number;
}

const Row = ({ row, rowIndex }: RowProps) => {
  return (
    <div className="row" id={`row-${rowIndex}`}>
      {row.map((square, squareIndex) => {
        const squareId = `square-${rowIndex}-${squareIndex}`;
        return <Square key={squareIndex} square={square} squareId={squareId} />;
      })}
    </div>
  );
};

export default Row;
