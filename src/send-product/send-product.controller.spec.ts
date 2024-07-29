import { Test, TestingModule } from '@nestjs/testing';
import { SendProductController } from './send-product.controller';
import { SendProductService } from './send-product.service';

describe('SendProductController', () => {
  let controller: SendProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendProductController],
      providers: [SendProductService],
    }).compile();

    controller = module.get<SendProductController>(SendProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
