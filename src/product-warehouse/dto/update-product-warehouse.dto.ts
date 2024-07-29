import { PartialType } from '@nestjs/mapped-types';
import { CreateProductWarehouseDto } from './create-product-warehouse.dto';

export class UpdateProductWarehouseDto extends PartialType(CreateProductWarehouseDto) {}
