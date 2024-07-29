import { forwardRef, Module } from '@nestjs/common';
import { GenerateDispachService } from './generate-dispach.service';
import { GenerateDispachController } from './generate-dispach.controller';
import { PurchaseOrderModule } from '../purchase-order/purchase-order.module';
import { OrderProductModule } from '../order-product/order-product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GenerateDispach, GenerateDispachSchema } from './schema/generate-dispach.schema';
import { ProyectModule } from '../proyect/proyect.module';
import { EmailService } from '../service/email.service';
import { JwtService } from '../service/jwt.service';
import { BoardCanvaModule } from '../board-canva/board-canva.module';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [MongooseModule.forFeature([{
    name: GenerateDispach.name,
    schema: GenerateDispachSchema,
  }]),
    forwardRef(() => PurchaseOrderModule),
    forwardRef(() => OrderProductModule),
    forwardRef(() => BoardCanvaModule),
    forwardRef(() => ProductModule),
    forwardRef(() => ProyectModule)],
  controllers: [GenerateDispachController],
  providers: [GenerateDispachService, EmailService, JwtService],
})
export class GenerateDispachModule {
}
