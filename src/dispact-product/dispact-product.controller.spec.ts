import { Test, TestingModule } from '@nestjs/testing';
import { DispactProductController } from './dispact-product.controller';
import { DispactProductService } from './dispact-product.service';

describe('DispactProductController', () => {
  let controller: DispactProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispactProductController],
      providers: [DispactProductService],
    }).compile();

    controller = module.get<DispactProductController>(DispactProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
