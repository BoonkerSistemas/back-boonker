import { Module } from '@nestjs/common';
import { SendProductService } from './send-product.service';
import { SendProductController } from './send-product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SendProduct, SendProductSchema } from './schema/send-product.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: SendProduct.name, schema: SendProductSchema}]
  ),
  ],
  controllers: [SendProductController],
  providers: [SendProductService],
})
export class SendProductModule {}
