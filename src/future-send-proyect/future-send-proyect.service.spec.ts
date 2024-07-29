import { Test, TestingModule } from '@nestjs/testing';
import { FutureSendProyectService } from './future-send-proyect.service';

describe('FutureSendProyectService', () => {
  let service: FutureSendProyectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FutureSendProyectService],
    }).compile();

    service = module.get<FutureSendProyectService>(FutureSendProyectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
