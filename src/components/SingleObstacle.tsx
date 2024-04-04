interface SingleObstacleProps {
  index: number;
  direction: string;
  img: string;
}

const SingleObstacle = ({ index, direction, img }: SingleObstacleProps) => {
  return (
    <img
      key={index}
      className={`obstacle-img ${direction}`}
      alt="obstacle"
      src={img}
    />
  );
};

export default SingleObstacle;
