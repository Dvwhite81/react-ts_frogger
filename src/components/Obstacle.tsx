import { useEffect, useState } from 'react';

import { getNextImage, getObstacleSideStyle } from '../utils/helpers';
import { ObstacleType } from '../utils/types';
import { BOARD_SIZE, SQUARE_SIZE } from '../utils/constants';

interface ObstacleProps {
  obstacle: ObstacleType;
  speed: number;
}

const Obstacle = ({ obstacle, speed }: ObstacleProps) => {
  const { direction, obstacleImg, width, isSprite } = obstacle;
  if (!direction || !obstacleImg) return;

  const sideStyle = getObstacleSideStyle(obstacle);

  const [leftPosition, setLeftPosition] = useState(sideStyle);
  const [img, setImg] = useState(obstacleImg);

  useEffect(() => {
    const move = () => {
      if (direction === 'right') {
        if (leftPosition + 1 > BOARD_SIZE) {
          setLeftPosition(sideStyle);
        } else {
          setLeftPosition((prev) => prev + 1);
        }
      } else if (direction === 'left') {
        if (leftPosition - 1 < 0 - SQUARE_SIZE * width) {
          setLeftPosition(sideStyle);
        } else {
          setLeftPosition((prev) => prev - 1);
        }
      }
    };

    const interval = setInterval(() => {
      move();
    }, speed);

    return () => clearInterval(interval);
  }, [leftPosition]);

  useEffect(() => {
    if (!isSprite) return;

    const animate = () => {
      const nextImg = getNextImage(img);
      setImg(nextImg);
    };

    const interval = setInterval(() => {
      animate();
    }, 400);

    return () => clearInterval(interval);
  }, [img]);

  return (
    <div className="row-obstacle" style={{ top: 0, left: `${leftPosition}px` }}>
      <img className={`obstacle-img ${direction}`} alt="obstacle" src={img} />
    </div>
  );
};

export default Obstacle;
