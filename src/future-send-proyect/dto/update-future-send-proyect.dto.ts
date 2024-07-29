import { PartialType } from '@nestjs/mapped-types';
import { CreateFutureSendProyectDto } from './create-future-send-proyect.dto';

export class UpdateFutureSendProyectDto extends PartialType(CreateFutureSendProyectDto) {}
