import { Test, TestingModule } from '@nestjs/testing';
import { SendProductService } from './send-product.service';

describe('SendProductService', () => {
  let service: SendProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendProductService],
    }).compile();

    service = module.get<SendProductService>(SendProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
