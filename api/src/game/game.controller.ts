import { Controller, Get } from '@nestjs/common';
import { MoveTile } from './core/useCases/moveTile/moveTile.usecase';

@Controller('2048')
export class GameController {
  @Get()
  test() {
    const moveTile = new MoveTile();
    moveTile.toDirection('UP');
  }
}
