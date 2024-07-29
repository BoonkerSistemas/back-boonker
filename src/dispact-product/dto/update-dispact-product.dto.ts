import { PartialType } from '@nestjs/swagger';
import { CreateDispactProductDto } from './create-dispact-product.dto';

export class UpdateDispactProductDto extends PartialType(CreateDispactProductDto) {}
