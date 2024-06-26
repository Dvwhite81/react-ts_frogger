import { useEffect, useState } from 'react';

import {
  getNextImage,
  getObstacleSideStyle,
  getRandomStartDelay,
} from '../utils/helpers';
import { ObstacleType } from '../utils/types';
import { BOARD_SIZE, SQUARE_SIZE } from '../utils/constants';
import SingleObstacle from './SingleObstacle';
import GroupObstacle from './GroupObstacle';

interface ObstacleProps {
  obstacle: ObstacleType;
  isStarted: boolean;
  hasBeenPaused: boolean;
  speed: number;
}

const Obstacle = ({
  obstacle,
  isStarted,
  hasBeenPaused,
  speed,
}: ObstacleProps) => {
  const { direction, obstacleImg, width, group, isSprite } = obstacle;
  if (!direction || !obstacleImg) return;

  const sideStyle = getObstacleSideStyle(obstacle);

  const [leftPosition, setLeftPosition] = useState(sideStyle);
  const [img, setImg] = useState(obstacleImg);
  const [isMoving, setIsMoving] = useState(false);

  const startDelay = getRandomStartDelay();

  useEffect(() => {
    if (isStarted) {
      if (hasBeenPaused) {
        setIsMoving(true);
      } else {
        setTimeout(() => {
          setIsMoving(true);
        }, startDelay);
      }
    } else {
      setIsMoving(false);
    }
  });

  useEffect(() => {
    const move = () => {
      if (direction === 'right') {
        if (leftPosition + 1 > BOARD_SIZE) {
          setLeftPosition(sideStyle);
        } else {
          setLeftPosition((prev) => prev + 1);
        }
      } else if (direction === 'left') {
        const groupWidth = group ? width * group : width;

        if (leftPosition - 1 < 0 - SQUARE_SIZE * groupWidth) {
          setLeftPosition(sideStyle);
        } else {
          setLeftPosition((prev) => prev - 1);
        }
      }
    };

    const interval = setInterval(() => {
      if (isMoving) {
        move();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [leftPosition, isMoving]);

  useEffect(() => {
    if (!isSprite) return;

    const animate = () => {
      const isFrog = false;
      const nextImg = getNextImage(img, isFrog);
      setImg(nextImg);
    };

    const interval = setInterval(() => {
      if (isMoving) {
        animate();
      }
    }, 400);

    return () => clearInterval(interval);
  }, [img, isStarted, isMoving]);

  return (
    <div className="row-obstacle" style={{ top: 0, left: `${leftPosition}px` }}>
      {group ? (
        <GroupObstacle group={group} direction={direction} img={img} />
      ) : (
        <SingleObstacle index={0} direction={direction} img={img} />
      )}
    </div>
  );
};

export default Obstacle;
