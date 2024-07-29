import { forwardRef, Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsController } from './units.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ClientModule } from '../client/client.module';
import { ModulesModule } from '../modules/modules.module';
import { PurchaseOrderModule } from '../purchase-order/purchase-order.module';
import { Units, UnitsSchema } from './schema/unit.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Units.name, schema: UnitsSchema}]), AuthModule,
    forwardRef(() => ClientModule),
    forwardRef(() => ModulesModule),PurchaseOrderModule],
  controllers: [UnitsController],
  providers: [UnitsService],
})
export class UnitsModule {}
