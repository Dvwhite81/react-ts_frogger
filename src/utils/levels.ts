/*
1 - bush-closed
2 - bush-open
3 - water
4 - grass
5 - road
*/

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
    { direction: null, obstacleImg: null, width: 0, group: null },
    { direction: 'right', obstacleImg: '/log-4.png', width: 4, group: null },
    {
      direction: 'left',
      obstacleImg: '/turtle-1-left.png',
      width: 1,
      group: 2,
    },
    { direction: 'right', obstacleImg: '/log-5.png', width: 5, group: null },
    {
      direction: 'left',
      obstacleImg: '/turtle-1-left.png',
      width: 1,
      group: 3,
    },
    { direction: 'right', obstacleImg: '/log-3.png', width: 3, group: null },
    { direction: null, obstacleImg: null, width: 0, group: null },
    {
      direction: 'left',
      obstacleImg: '/truck-4-left.png',
      width: 4,
      group: null,
    },
    {
      direction: 'right',
      obstacleImg: '/car-blue-right.png',
      width: 2,
      group: null,
    },
    {
      direction: 'left',
      obstacleImg: '/car-green-left.png',
      width: 2,
      group: null,
    },
    {
      direction: 'right',
      obstacleImg: '/truck-3-right.png',
      width: 3,
      group: null,
    },
    {
      direction: 'left',
      obstacleImg: '/car-yellow-left.png',
      width: 2,
      group: null,
    },
  ],
};

export const LEVELS = [
  {
    id: 1,
    level: levelOne,
  },
];
