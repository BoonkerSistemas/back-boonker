import { PartialType } from '@nestjs/mapped-types';
import { CreateBoonkerIntWarehouseIncomeDto } from './create-boonker-int-warehouse-income.dto';

export class UpdateBoonkerIntWarehouseIncomeDto extends PartialType(CreateBoonkerIntWarehouseIncomeDto) {}
