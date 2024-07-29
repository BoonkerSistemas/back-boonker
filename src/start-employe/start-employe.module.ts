import { Module } from '@nestjs/common';
import { StartEmployeService } from './start-employe.service';
import { StartEmployeController } from './start-employe.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StartEmployee, StartEmployeeSchema } from './schema/start-employe.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [MongooseModule.forFeature([{name: StartEmployee.name, schema: StartEmployeeSchema}]),UsersModule],
  controllers: [StartEmployeController],
  providers: [StartEmployeService],
})
export class StartEmployeModule {}
