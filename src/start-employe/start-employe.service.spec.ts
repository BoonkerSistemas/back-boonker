import { Test, TestingModule } from '@nestjs/testing';
import { StartEmployeService } from './start-employe.service';

describe('StartEmployeService', () => {
  let service: StartEmployeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StartEmployeService],
    }).compile();

    service = module.get<StartEmployeService>(StartEmployeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
