import { Game2048Repository } from '../core/ports/game2048.repository';
import { Grid } from '../core/useCases/moveTile/moveTile.usecase';

export class InMemoryGame2048Repository implements Game2048Repository {
  grid: Grid = [
    [2, null, null, null],
    [4, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];

  fetch(): Grid {
    return [...this.grid];
  }
  save(grid: Grid): void {
    this.grid = [...grid];
  }
}
