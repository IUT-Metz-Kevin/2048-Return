import { Body, Controller, Post } from '@nestjs/common';
import {
  Direction,
  MoveTile,
} from '../core/useCases/moveTile/moveTile.usecase';

@Controller('2048')
export class GameController {
  constructor(private readonly moveTile: MoveTile) {}

  @Post()
  move(@Body() { direction }: { direction: Direction }) {
    return this.moveTile.toDirection(direction);
  }
}
