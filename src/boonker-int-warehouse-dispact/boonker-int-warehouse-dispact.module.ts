import { Module } from '@nestjs/common';
import { BoonkerIntWarehouseDispactService } from './boonker-int-warehouse-dispact.service';
import { BoonkerIntWarehouseDispactController } from './boonker-int-warehouse-dispact.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BoonkerIntWarehouseDispact,
  BoonkerIntWarehouseDispactSchema,
} from './schema/boonker-int-warehouse-dispact.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: BoonkerIntWarehouseDispact.name, schema: BoonkerIntWarehouseDispactSchema }])],
  controllers: [BoonkerIntWarehouseDispactController],
  providers: [BoonkerIntWarehouseDispactService],
})
export class BoonkerIntWarehouseDispactModule {}
