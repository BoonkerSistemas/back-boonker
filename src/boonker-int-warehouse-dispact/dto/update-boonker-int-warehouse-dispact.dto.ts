import { PartialType } from '@nestjs/mapped-types';
import { CreateBoonkerIntWarehouseDispactDto } from './create-boonker-int-warehouse-dispact.dto';

export class UpdateBoonkerIntWarehouseDispactDto extends PartialType(CreateBoonkerIntWarehouseDispactDto) {}
