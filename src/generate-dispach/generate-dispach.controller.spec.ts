import { Test, TestingModule } from '@nestjs/testing';
import { GenerateDispachController } from './generate-dispach.controller';
import { GenerateDispachService } from './generate-dispach.service';

describe('GenerateDispachController', () => {
  let controller: GenerateDispachController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateDispachController],
      providers: [GenerateDispachService],
    }).compile();

    controller = module.get<GenerateDispachController>(GenerateDispachController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
