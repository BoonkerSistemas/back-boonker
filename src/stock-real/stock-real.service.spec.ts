import { Test, TestingModule } from '@nestjs/testing';
import { StockRealService } from './stock-real.service';

describe('StockRealService', () => {
  let service: StockRealService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockRealService],
    }).compile();

    service = module.get<StockRealService>(StockRealService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
