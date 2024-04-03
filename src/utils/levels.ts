/*
1 - bush-closed
2 - bush-open
3 - water
4 - grass
5 - road
*/

const getSquareBackground = (num: number) => {
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

const levelOne = {
  grid: [
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  ],
  obstacles: [
    { direction: null, obstacle: null, group: null },
    { direction: 'right', obstacle: 'log-4', group: null },
    { direction: 'left', obstacle: 'turtle-1-left', group: 2 },
    { direction: 'right', obstacle: 'log-5', group: null },
    { direction: 'left', obstacle: 'turtle-1-left', group: 3 },
    { direction: 'right', obstacle: 'log-3', group: null },
    { direction: null, obstacle: null, group: null },
    { direction: 'left', obstacle: 'truck-4-left', group: null },
    { direction: 'right', obstacle: 'car-blue-right', group: null },
    { direction: 'left', obstacle: 'car-green-left', group: null },
    { direction: 'right', obstacle: 'truck-3-right', group: null },
    { direction: 'left', obstacle: 'car-yellow-left', group: null },
  ],
};

const LEVELS = [
  {
    id: 1,
    level: levelOne,
  },
];

export { getSquareBackground, LEVELS };
