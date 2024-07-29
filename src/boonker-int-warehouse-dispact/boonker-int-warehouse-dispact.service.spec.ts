import { Test, TestingModule } from '@nestjs/testing';
import { BoonkerIntWarehouseDispactService } from './boonker-int-warehouse-dispact.service';

describe('BoonkerIntWarehouseDispactService', () => {
  let service: BoonkerIntWarehouseDispactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoonkerIntWarehouseDispactService],
    }).compile();

    service = module.get<BoonkerIntWarehouseDispactService>(BoonkerIntWarehouseDispactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
