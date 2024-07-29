import { PartialType } from '@nestjs/mapped-types';
import { CreateFutureProyectDto } from './create-future-proyect.dto';

export class UpdateFutureProyectDto extends PartialType(CreateFutureProyectDto) {}
