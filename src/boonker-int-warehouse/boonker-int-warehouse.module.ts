import { Module } from '@nestjs/common';
import { BoonkerIntWarehouseService } from './boonker-int-warehouse.service';
import { BoonkerIntWarehouseController } from './boonker-int-warehouse.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BoonkerIntWarehouse, BoonkerIntWarehouseSchema } from './schema/boonker-int-warehouse.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: BoonkerIntWarehouse.name, schema: BoonkerIntWarehouseSchema }])],
  controllers: [BoonkerIntWarehouseController],
  providers: [BoonkerIntWarehouseService],
})
export class BoonkerIntWarehouseModule {
}
