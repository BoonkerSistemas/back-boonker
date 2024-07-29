import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-proyect.dto';

export class UpdateProyectDto extends PartialType(CreateProjectDto) {}
