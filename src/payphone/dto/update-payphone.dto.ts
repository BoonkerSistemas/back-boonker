import { PartialType } from '@nestjs/swagger';
import { CreatePayphoneDto } from './create-payphone.dto';

export class UpdatePayphoneDto extends PartialType(CreatePayphoneDto) {}
