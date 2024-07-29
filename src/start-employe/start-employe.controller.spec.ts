import { Test, TestingModule } from '@nestjs/testing';
import { StartEmployeController } from './start-employe.controller';
import { StartEmployeService } from './start-employe.service';

describe('StartEmployeController', () => {
  let controller: StartEmployeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StartEmployeController],
      providers: [StartEmployeService],
    }).compile();

    controller = module.get<StartEmployeController>(StartEmployeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
