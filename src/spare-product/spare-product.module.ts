import { Module } from '@nestjs/common';
import { SpareProductService } from './spare-product.service';
import { SpareProductController } from './spare-product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SpareProduct, SpareProductSchema } from './schema/spare-product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SpareProduct.name, schema: SpareProductSchema },
])
  ],
  controllers: [SpareProductController],
  providers: [SpareProductService],
})
export class SpareProductModule {}
