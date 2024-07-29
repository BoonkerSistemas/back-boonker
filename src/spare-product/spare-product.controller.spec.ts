import { Test, TestingModule } from '@nestjs/testing';
import { SpareProductController } from './spare-product.controller';
import { SpareProductService } from './spare-product.service';

describe('SpareProductController', () => {
  let controller: SpareProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpareProductController],
      providers: [SpareProductService],
    }).compile();

    controller = module.get<SpareProductController>(SpareProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
