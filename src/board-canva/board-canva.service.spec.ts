import { Test, TestingModule } from '@nestjs/testing';
import { BoardCanvaService } from './board-canva.service';

describe('BoardCanvaService', () => {
  let service: BoardCanvaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardCanvaService],
    }).compile();

    service = module.get<BoardCanvaService>(BoardCanvaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
