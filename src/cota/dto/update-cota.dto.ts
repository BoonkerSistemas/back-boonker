import { PartialType } from '@nestjs/mapped-types';
import { CreateCotaDto } from './create-cota.dto';

export class UpdateCotaDto extends PartialType(CreateCotaDto) {}
