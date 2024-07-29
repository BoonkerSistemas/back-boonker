import { forwardRef, Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { Client, ClientSchema } from './schema/client.schema';
import { UsersModule } from '../users/users.module';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]), AuthModule,
    forwardRef(() => UsersModule),
    forwardRef(() => RoleModule)],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService]
})
export class ClientModule {
}
