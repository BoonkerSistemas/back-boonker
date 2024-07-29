import { Test, TestingModule } from '@nestjs/testing';
import { BoonkerIntWarehouseRealController } from './boonker-int-warehouse-real.controller';
import { BoonkerIntWarehouseRealService } from './boonker-int-warehouse-real.service';

describe('BoonkerIntWarehouseRealController', () => {
  let controller: BoonkerIntWarehouseRealController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoonkerIntWarehouseRealController],
      providers: [BoonkerIntWarehouseRealService],
    }).compile();

    controller = module.get<BoonkerIntWarehouseRealController>(BoonkerIntWarehouseRealController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
