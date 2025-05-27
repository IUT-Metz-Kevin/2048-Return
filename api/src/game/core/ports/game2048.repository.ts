import { Grid } from '../useCases/moveTile/moveTile.usecase';

export abstract class Game2048Repository {
  abstract fetch(): Grid;
  abstract save(grid: Grid): void;
}
