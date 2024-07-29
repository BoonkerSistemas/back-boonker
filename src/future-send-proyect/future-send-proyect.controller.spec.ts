import { Test, TestingModule } from '@nestjs/testing';
import { FutureSendProyectController } from './future-send-proyect.controller';
import { FutureSendProyectService } from './future-send-proyect.service';

describe('FutureSendProyectController', () => {
  let controller: FutureSendProyectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FutureSendProyectController],
      providers: [FutureSendProyectService],
    }).compile();

    controller = module.get<FutureSendProyectController>(FutureSendProyectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
