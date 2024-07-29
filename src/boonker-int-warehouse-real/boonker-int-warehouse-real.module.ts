import { forwardRef, Module } from '@nestjs/common';
import { BoonkerIntWarehouseRealService } from './boonker-int-warehouse-real.service';
import { BoonkerIntWarehouseRealController } from './boonker-int-warehouse-real.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BoonkerIntWarehouseReal, BoonkerIntWarehouseRealSchema } from './schema/boonker-int-warehouse-real.schema';



@Module({
  imports: [MongooseModule.forFeature([{ name: BoonkerIntWarehouseReal.name, schema: BoonkerIntWarehouseRealSchema }])],
  controllers: [BoonkerIntWarehouseRealController],
  providers: [BoonkerIntWarehouseRealService],
})
export class BoonkerIntWarehouseRealModule {}
