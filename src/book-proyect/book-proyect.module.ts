import { Module } from '@nestjs/common';
import { BookProyectService } from './book-proyect.service';
import { BookProyectController } from './book-proyect.controller';

@Module({
  controllers: [BookProyectController],
  providers: [BookProyectService],
})
export class BookProyectModule {}
