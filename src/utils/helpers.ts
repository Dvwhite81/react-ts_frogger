import { BOARD_SIZE, SCREEN_WIDTH, SQUARE_SIZE } from './constants';
import { LevelObject, ObstacleType } from './types';

export const getSquareBackground = (num: number) => {
  let img;

  switch (num) {
    case 1:
      img = '/bush-closed.png';
      break;
    case 2:
      img = '/bush-open.png';
      break;
    case 3:
      img = '/water.png';
      break;
    case 4:
      img = '/grass.png';
      break;
    case 5:
      img = '/road.png';
      break;
    default:
      break;
  }

  return img;
};

export const getRowObstacle = (level: LevelObject, rowIndex: number) => {
  const { obstacles } = level;
  if (!obstacles) return null;
  const obstacle = obstacles[rowIndex];
  if (!obstacle) return null;
  const { obstacleImg } = obstacle;
  if (!obstacleImg) return null;
  return level.obstacles[rowIndex];
};

export const getObstacleSideStyle = (obstacle: ObstacleType) => {
  const { direction, width } = obstacle;

  if (direction === 'right') {
    const position = 0 - SQUARE_SIZE * width;
    return `${position}px`;
  } else if (direction === 'left') {
    return `${BOARD_SIZE}px`;
  } else {
    return '0px';
  }
};
