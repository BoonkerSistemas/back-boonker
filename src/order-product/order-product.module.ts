import { forwardRef, Module } from '@nestjs/common';
import { OrderProductService } from './order-product.service';
import { OrderProductController } from './order-product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderProduct, OrderProductSchema } from './schema/order-product.schema';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: OrderProduct.name, schema: OrderProductSchema }]),
    forwardRef(() => ProductModule)],
  controllers: [OrderProductController],
  providers: [OrderProductService],
  exports: [OrderProductService],

})
export class OrderProductModule {
}
