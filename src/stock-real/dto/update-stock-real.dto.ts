import { PartialType } from '@nestjs/swagger';
import { CreateStockRealDto } from './create-stock-real.dto';

export class UpdateStockRealDto extends PartialType(CreateStockRealDto) {}
