import { Test, TestingModule } from '@nestjs/testing';
import { BookProyectController } from './book-proyect.controller';
import { BookProyectService } from './book-proyect.service';

describe('BookProyectController', () => {
  let controller: BookProyectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookProyectController],
      providers: [BookProyectService],
    }).compile();

    controller = module.get<BookProyectController>(BookProyectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
