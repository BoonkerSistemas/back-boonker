import { Test, TestingModule } from '@nestjs/testing';
import { SpareProductService } from './spare-product.service';

describe('SpareProductService', () => {
  let service: SpareProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpareProductService],
    }).compile();

    service = module.get<SpareProductService>(SpareProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
