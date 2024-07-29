import { Test, TestingModule } from '@nestjs/testing';
import { FutureProyectController } from './future-proyect.controller';
import { FutureProyectService } from './future-proyect.service';

describe('FutureProyectController', () => {
  let controller: FutureProyectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FutureProyectController],
      providers: [FutureProyectService],
    }).compile();

    controller = module.get<FutureProyectController>(FutureProyectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
