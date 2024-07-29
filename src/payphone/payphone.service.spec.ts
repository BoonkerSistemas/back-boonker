import { Test, TestingModule } from '@nestjs/testing';
import { PayphoneService } from './payphone.service';

describe('PayphoneService', () => {
  let service: PayphoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayphoneService],
    }).compile();

    service = module.get<PayphoneService>(PayphoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
