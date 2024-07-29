import { PartialType } from '@nestjs/swagger';
import { CreateSpareProductDto } from './create-spare-product.dto';

export class UpdateSpareProductDto extends PartialType(CreateSpareProductDto) {}
