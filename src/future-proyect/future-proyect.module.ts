import { Module } from '@nestjs/common';
import { FutureProyectService } from './future-proyect.service';
import { FutureProyectController } from './future-proyect.controller';

@Module({
  controllers: [FutureProyectController],
  providers: [FutureProyectService],
})
export class FutureProyectModule {}
