import { Test, TestingModule } from '@nestjs/testing';
import { BoonkerIntWarehouseService } from './boonker-int-warehouse.service';

describe('BoonkerIntWarehouseService', () => {
  let service: BoonkerIntWarehouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoonkerIntWarehouseService],
    }).compile();

    service = module.get<BoonkerIntWarehouseService>(BoonkerIntWarehouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
