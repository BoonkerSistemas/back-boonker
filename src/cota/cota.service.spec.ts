import { Test, TestingModule } from '@nestjs/testing';
import { CotaService } from './cota.service';

describe('CotaService', () => {
  let service: CotaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotaService],
    }).compile();

    service = module.get<CotaService>(CotaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
