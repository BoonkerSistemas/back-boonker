import { Test, TestingModule } from '@nestjs/testing';
import { WebhoookService } from './webhoook.service';

describe('WebhoookService', () => {
  let service: WebhoookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebhoookService],
    }).compile();

    service = module.get<WebhoookService>(WebhoookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
