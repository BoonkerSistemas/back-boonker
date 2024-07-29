import { Test, TestingModule } from '@nestjs/testing';
import { GenerateDispachService } from './generate-dispach.service';

describe('GenerateDispachService', () => {
  let service: GenerateDispachService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateDispachService],
    }).compile();

    service = module.get<GenerateDispachService>(GenerateDispachService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
