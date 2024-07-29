import { PartialType } from '@nestjs/mapped-types';
import { CreateStartEmployeDto } from './create-start-employe.dto';

export class UpdateStartEmployeDto extends PartialType(CreateStartEmployeDto) {}
