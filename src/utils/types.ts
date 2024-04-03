export type RowArray = Array<number>;

export interface ObstacleType {
  direction: string | null;
  obstacle: string | null;
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
