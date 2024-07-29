import { Test, TestingModule } from '@nestjs/testing';
import { FutureProyectService } from './future-proyect.service';

describe('FutureProyectService', () => {
  let service: FutureProyectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FutureProyectService],
    }).compile();

    service = module.get<FutureProyectService>(FutureProyectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
