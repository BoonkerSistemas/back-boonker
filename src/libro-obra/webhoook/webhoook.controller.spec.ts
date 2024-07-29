import { Test, TestingModule } from '@nestjs/testing';
import { WebhoookController } from './webhoook.controller';
import { WebhoookService } from './webhoook.service';

describe('WebhoookController', () => {
  let controller: WebhoookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhoookController],
      providers: [WebhoookService],
    }).compile();

    controller = module.get<WebhoookController>(WebhoookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
