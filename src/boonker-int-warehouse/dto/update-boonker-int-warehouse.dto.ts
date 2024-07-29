import { PartialType } from '@nestjs/mapped-types';
import { CreateBoonkerIntWarehouseDto } from './create-boonker-int-warehouse.dto';

export class UpdateBoonkerIntWarehouseDto extends PartialType(CreateBoonkerIntWarehouseDto) {}
