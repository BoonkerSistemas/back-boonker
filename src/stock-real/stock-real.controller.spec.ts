import { Test, TestingModule } from '@nestjs/testing';
import { StockRealController } from './stock-real.controller';
import { StockRealService } from './stock-real.service';

describe('StockRealController', () => {
  let controller: StockRealController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockRealController],
      providers: [StockRealService],
    }).compile();

    controller = module.get<StockRealController>(StockRealController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
