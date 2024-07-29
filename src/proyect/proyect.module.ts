import { forwardRef, Module } from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { ProyectController } from './proyect.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { Project, ProjectSchema } from './schema/proyect.schema';
import { ClientModule } from '../client/client.module';
import { ModulesModule } from '../modules/modules.module';
import { PurchaseOrderModule } from '../purchase-order/purchase-order.module';

@Module({
  imports: [MongooseModule.forFeature([{name: Project.name, schema: ProjectSchema}]), AuthModule,
    forwardRef(() => ClientModule),
    forwardRef(() => ModulesModule),PurchaseOrderModule],
  controllers: [ProyectController],
  providers: [ProyectService],
  exports:[ProyectService]
})
export class ProyectModule {}
