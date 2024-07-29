import { Test, TestingModule } from '@nestjs/testing';
import { BoonkerIntWarehouseProductController } from './boonker-int-warehouse-product.controller';
import { BoonkerIntWarehouseProductService } from './boonker-int-warehouse-product.service';

describe('BoonkerIntWarehouseProductController', () => {
  let controller: BoonkerIntWarehouseProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoonkerIntWarehouseProductController],
      providers: [BoonkerIntWarehouseProductService],
    }).compile();

    controller = module.get<BoonkerIntWarehouseProductController>(BoonkerIntWarehouseProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
