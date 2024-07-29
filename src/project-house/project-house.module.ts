import { Module } from '@nestjs/common';
import { ProjectHouseService } from './project-house.service';
import { ProjectHouseController } from './project-house.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectHouse, ProjectHouseSchema } from './schema/project-house.schema';
import { EmailService } from '../service/email.service';
import { JwtService } from '../service/jwt.service';

@Module({
  imports: [MongooseModule.forFeature([{name: ProjectHouse.name, schema: ProjectHouseSchema}]), ],
  controllers: [ProjectHouseController],
  providers: [ProjectHouseService, EmailService, JwtService],
})
export class ProjectHouseModule {}
