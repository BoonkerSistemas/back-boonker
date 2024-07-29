import { forwardRef, Module } from '@nestjs/common';
import { BoonkerIntWarehouseIncomeService } from './boonker-int-warehouse-income.service';
import { BoonkerIntWarehouseIncomeController } from './boonker-int-warehouse-income.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BoonkerIntWarehouseIncomeSchema,
  BoonkerIntWarehouseIncome,
} from './schema/boonker-int-warehouse-income.schema';



@Module({
  imports: [MongooseModule.forFeature([{ name: BoonkerIntWarehouseIncome.name, schema: BoonkerIntWarehouseIncomeSchema }])],
  controllers: [BoonkerIntWarehouseIncomeController],
  providers: [BoonkerIntWarehouseIncomeService],
})
export class BoonkerIntWarehouseIncomeModule {}
