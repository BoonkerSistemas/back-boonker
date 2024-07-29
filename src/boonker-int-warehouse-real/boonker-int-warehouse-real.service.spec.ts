import { Test, TestingModule } from '@nestjs/testing';
import { BoonkerIntWarehouseRealService } from './boonker-int-warehouse-real.service';

describe('BoonkerIntWarehouseRealService', () => {
  let service: BoonkerIntWarehouseRealService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoonkerIntWarehouseRealService],
    }).compile();

    service = module.get<BoonkerIntWarehouseRealService>(BoonkerIntWarehouseRealService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
