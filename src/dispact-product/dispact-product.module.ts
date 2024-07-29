import { forwardRef, Module } from '@nestjs/common';
import { DispactProductService } from './dispact-product.service';
import { DispactProductController } from './dispact-product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DispatchProduct, DispatchProductSchema } from './entities/dispact-product.entity';
import { StockRealModule } from '../stock-real/stock-real.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DispatchProduct.name, schema: DispatchProductSchema },
    ]),
    forwardRef(() => StockRealModule),
  ],
  controllers: [DispactProductController],
  providers: [DispactProductService],
})
export class DispactProductModule {}
