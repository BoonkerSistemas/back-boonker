import { Test, TestingModule } from '@nestjs/testing';
import { ProductWarehouseService } from './product-warehouse.service';

describe('ProductWarehouseService', () => {
  let service: ProductWarehouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductWarehouseService],
    }).compile();

    service = module.get<ProductWarehouseService>(ProductWarehouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
