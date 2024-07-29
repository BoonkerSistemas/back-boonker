import { Test, TestingModule } from '@nestjs/testing';
import { BoonkerIntWarehouseDispactController } from './boonker-int-warehouse-dispact.controller';
import { BoonkerIntWarehouseDispactService } from './boonker-int-warehouse-dispact.service';

describe('BoonkerIntWarehouseDispactController', () => {
  let controller: BoonkerIntWarehouseDispactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoonkerIntWarehouseDispactController],
      providers: [BoonkerIntWarehouseDispactService],
    }).compile();

    controller = module.get<BoonkerIntWarehouseDispactController>(BoonkerIntWarehouseDispactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
