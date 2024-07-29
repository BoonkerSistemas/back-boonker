import { PartialType } from '@nestjs/mapped-types';
import { CreateBoonkerIntWarehouseProductDto } from './create-boonker-int-warehouse-product.dto';

export class UpdateBoonkerIntWarehouseProductDto extends PartialType(CreateBoonkerIntWarehouseProductDto) {}
