import { Module } from '@nestjs/common';
import { BoardCanvaService } from './board-canva.service';
import { BoardCanvaController } from './board-canva.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardCanva, BoardCanvaSchema } from './schema/board-canva.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: BoardCanva.name, schema: BoardCanvaSchema}]), ],
  controllers: [BoardCanvaController],
  providers: [BoardCanvaService],
  exports: [BoardCanvaService]
})
export class BoardCanvaModule {}
