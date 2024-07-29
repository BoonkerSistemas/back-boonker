import { PartialType } from '@nestjs/mapped-types';
import { CreateSendProductDto } from './create-send-product.dto';

export class UpdateSendProductDto extends PartialType(CreateSendProductDto) {}
