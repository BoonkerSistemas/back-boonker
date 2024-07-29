import { PartialType } from '@nestjs/swagger';
import { CreateGenerateDispachDto } from './create-generate-dispach.dto';

export class UpdateGenerateDispachDto extends PartialType(CreateGenerateDispachDto) {}
