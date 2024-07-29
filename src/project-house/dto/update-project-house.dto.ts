import { PartialType } from '@nestjs/swagger';
import { CreateProjectHouseDto } from './create-project-house.dto';

export class UpdateProjectHouseDto extends PartialType(CreateProjectHouseDto) {}
