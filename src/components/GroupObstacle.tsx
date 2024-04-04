import SingleObstacle from './SingleObstacle';

interface GroupObstacleProps {
  group: number;
  direction: string;
  img: string;
}

const GroupObstacle = ({ group, direction, img }: GroupObstacleProps) => {
  const obstacleGroup = [];

  for (let i = 0; i < group; i++) {
    obstacleGroup.push(
      <SingleObstacle key={i} index={i} direction={direction} img={img} />
    );
  }

  return obstacleGroup;
};

export default GroupObstacle;
