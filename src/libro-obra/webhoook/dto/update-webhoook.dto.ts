import { PartialType } from '@nestjs/swagger';
import { CreateWebhoookDto } from './create-webhoook.dto';

export class UpdateWebhoookDto extends PartialType(CreateWebhoookDto) {}
