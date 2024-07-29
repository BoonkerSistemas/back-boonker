import { Test, TestingModule } from '@nestjs/testing';
import { BoardCanvaController } from './board-canva.controller';
import { BoardCanvaService } from './board-canva.service';

describe('BoardCanvaController', () => {
  let controller: BoardCanvaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardCanvaController],
      providers: [BoardCanvaService],
    }).compile();

    controller = module.get<BoardCanvaController>(BoardCanvaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
