import { getSquareBackground } from '../utils/levels';

interface SquareProps {
  square: number;
  squareId: string;
}

const Square = ({ square, squareId }: SquareProps) => {
  const imgUrl = getSquareBackground(square);
  return (
    <div className="square" id={squareId}>
      <img className="square-background" alt="square background" src={imgUrl} />
    </div>
  );
};

export default Square;
