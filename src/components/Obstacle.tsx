import { getObstacleSideStyle } from '../utils/helpers';
import { ObstacleType } from '../utils/types';

interface ObstacleProps {
  obstacle: ObstacleType;
}

const Obstacle = ({ obstacle }: ObstacleProps) => {
  const { direction, obstacleImg } = obstacle;
  if (!direction || !obstacleImg) return;

  const sideStyle = getObstacleSideStyle(obstacle);
  console.log('sideStyle:', sideStyle);

  return (
    <div className="row-obstacle" style={{ top: 0, left: sideStyle }}>
      <img
        className={`obstacle-img ${direction}`}
        alt="obstacle"
        src={obstacleImg}
      />
    </div>
  );
};

export default Obstacle;
