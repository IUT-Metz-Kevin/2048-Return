import { Module } from '@nestjs/common';
import { GameController } from './controllers/game.controller';
import { MoveTile } from './core/useCases/moveTile/moveTile.usecase';
import { Game2048Repository } from './core/ports/game2048.repository';
import { InMemoryGame2048Repository } from './repositories/inMemoryGame.repository';

@Module({
  controllers: [GameController],
  providers: [
    // Si notre MoveTile n'utilise pas @Inject au niveau des dépendances à injecter
    // {
    //   provide: MoveTile,
    //   useFactory(gameRepository: Game2048Repository) {
    //     return new MoveTile(gameRepository);
    //   },
    //   inject: [Game2048Repository],
    // },
    MoveTile,
    {
      provide: Game2048Repository,
      useClass: InMemoryGame2048Repository,
    },
  ],
})
export class GameModule {}
