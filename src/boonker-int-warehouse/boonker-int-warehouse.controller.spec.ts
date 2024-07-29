import { Test, TestingModule } from '@nestjs/testing';
import { BoonkerIntWarehouseController } from './boonker-int-warehouse.controller';
import { BoonkerIntWarehouseService } from './boonker-int-warehouse.service';

describe('BoonkerIntWarehouseController', () => {
  let controller: BoonkerIntWarehouseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoonkerIntWarehouseController],
      providers: [BoonkerIntWarehouseService],
    }).compile();

    controller = module.get<BoonkerIntWarehouseController>(BoonkerIntWarehouseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
