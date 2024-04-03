export type RowArray = Array<number>;

export interface ObstacleType {
  direction: string | null;
  obstacleImg: string | null;
  width: number;
  group: number | null;
}

export interface LevelObject {
  grid: RowArray[];
  obstacles: ObstacleType[];
}

export interface LevelType {
  id: number;
  level: LevelObject;
}
