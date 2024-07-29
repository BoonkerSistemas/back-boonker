import { Test, TestingModule } from '@nestjs/testing';
import { DispactProductService } from './dispact-product.service';

describe('DispactProductService', () => {
  let service: DispactProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DispactProductService],
    }).compile();

    service = module.get<DispactProductService>(DispactProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
