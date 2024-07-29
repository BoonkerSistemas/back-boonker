import { forwardRef, Module } from '@nestjs/common';
import { BoonkerIntWarehouseProductService } from './boonker-int-warehouse-product.service';
import { BoonkerIntWarehouseProductController } from './boonker-int-warehouse-product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BoonkerIntWarehouseProduct,
  BoonkerIntWarehouseProductSchema,
} from './entities/boonker-int-warehouse-product.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: BoonkerIntWarehouseProduct.name, schema: BoonkerIntWarehouseProductSchema }]),
   ],
  controllers: [BoonkerIntWarehouseProductController],
  providers: [BoonkerIntWarehouseProductService],
})
export class BoonkerIntWarehouseProductModule {}
