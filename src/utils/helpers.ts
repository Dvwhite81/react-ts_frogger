import {
  ARROW_BTNS,
  BOARD_SIZE,
  BOTTOM_OFFSET,
  SQUARE_SIZE,
} from './constants';
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
    return position;
  } else if (direction === 'left') {
    return BOARD_SIZE;
  } else {
    return 0;
  }
};

export const getNextImage = (img: string, isFrog: boolean) => {
  console.log('getNextImage');
  const fileName = img.split('.')[0];
  console.log('fileName:', fileName);
  const index = fileName.length - 2;

  const [fileStart, numString] = [
    fileName.substring(0, index),
    fileName.substring(index),
  ];
  let num = parseInt(numString, 10);
  console.log('num:', num);
  const nextNum = num + 1;
  console.log('nextNum:', nextNum);

  if (nextNum < 10) {
    console.log('first');
    if (isFrog && nextNum > 7) {
      console.log('second over limit nextnum:', nextNum);
      return `${fileStart}01.png`;
    } else {
      console.log('third');
      return `${fileStart}0${nextNum}.png`;
    }
  } else {
    console.log('fourth');
    if (!isFrog && nextNum > 20) {
      console.log('fifth over limit nextnum:', nextNum);
      return `${fileStart}01.png`;
    } else {
      console.log('sixth');
      return `${fileStart}${nextNum}.png`;
    }
  }
};

export const getRandomStartDelay = () => {
  return Math.floor(Math.random() * 3000);
};

export const getFrogStartPosition = () => {
  const bottomPosition = BOTTOM_OFFSET;
  const leftPosition = BOARD_SIZE / 2;
  return {
    bottom: bottomPosition,
    left: leftPosition,
  };
};

export const isArrowPress = (key: string) => {
  return ARROW_BTNS.includes(key);
};
