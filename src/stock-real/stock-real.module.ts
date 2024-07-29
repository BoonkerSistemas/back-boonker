import { Module } from '@nestjs/common';
import { StockRealService } from './stock-real.service';
import { StockRealController } from './stock-real.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StockReal, StockRealSchema } from './entities/stock-real.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StockReal.name, schema: StockRealSchema },
    ])
  ],
  controllers: [StockRealController],
  providers: [StockRealService],
  exports: [StockRealService]
})
export class StockRealModule {}
