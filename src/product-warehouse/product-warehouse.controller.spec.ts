import { Test, TestingModule } from '@nestjs/testing';
import { ProductWarehouseController } from './product-warehouse.controller';
import { ProductWarehouseService } from './product-warehouse.service';

describe('ProductWarehouseController', () => {
  let controller: ProductWarehouseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductWarehouseController],
      providers: [ProductWarehouseService],
    }).compile();

    controller = module.get<ProductWarehouseController>(ProductWarehouseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
