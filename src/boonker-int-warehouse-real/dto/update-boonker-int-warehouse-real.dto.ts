import { PartialType } from '@nestjs/mapped-types';
import { CreateBoonkerIntWarehouseRealDto } from './create-boonker-int-warehouse-real.dto';

export class UpdateBoonkerIntWarehouseRealDto extends PartialType(CreateBoonkerIntWarehouseRealDto) {}
