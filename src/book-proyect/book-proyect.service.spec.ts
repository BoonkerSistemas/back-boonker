import { Test, TestingModule } from '@nestjs/testing';
import { BookProyectService } from './book-proyect.service';

describe('BookProyectService', () => {
  let service: BookProyectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookProyectService],
    }).compile();

    service = module.get<BookProyectService>(BookProyectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
