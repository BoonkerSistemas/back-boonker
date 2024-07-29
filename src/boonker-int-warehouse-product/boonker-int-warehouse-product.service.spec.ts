import { Test, TestingModule } from '@nestjs/testing';
import { BoonkerIntWarehouseProductService } from './boonker-int-warehouse-product.service';

describe('BoonkerIntWarehouseProductService', () => {
  let service: BoonkerIntWarehouseProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoonkerIntWarehouseProductService],
    }).compile();

    service = module.get<BoonkerIntWarehouseProductService>(BoonkerIntWarehouseProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
