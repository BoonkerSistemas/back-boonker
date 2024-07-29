import { Module } from '@nestjs/common';
import { WebhoookService } from './webhoook.service';
import { WebhoookController } from './webhoook.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WebHook, WebHookSchema } from './entities/webhoook.entity';
import { AuthModule } from '../../auth/auth.module';
import { ProyectModule } from '../../proyect/proyect.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: WebHook.name, schema: WebHookSchema }]), AuthModule, ProyectModule],
  controllers: [WebhoookController],
  providers: [WebhoookService],

})
export class WebhoookModule {
}
