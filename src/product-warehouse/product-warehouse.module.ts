import { Module } from '@nestjs/common';
import { ProductWarehouseService } from './product-warehouse.service';
import { ProductWarehouseController } from './product-warehouse.controller';

@Module({
  controllers: [ProductWarehouseController],
  providers: [ProductWarehouseService],
})
export class ProductWarehouseModule {}
