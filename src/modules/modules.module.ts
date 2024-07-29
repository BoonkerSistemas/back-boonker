import { forwardRef, Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Modules, ModulesSchema } from './schema/module.schema';
import { ProyectService } from '../proyect/proyect.service';
import { PurchaseOrderModule } from '../purchase-order/purchase-order.module';

@Module({
  imports: [MongooseModule.forFeature([{name: Modules.name, schema: ModulesSchema}]), PurchaseOrderModule],
  controllers: [ModulesController],
  providers: [ModulesService],
  exports: [ModulesService]
})
export class ModulesModule {}
