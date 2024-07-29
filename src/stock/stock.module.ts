import { forwardRef, Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Stock, StockSchema } from './entities/stock.entity';
import { ClientModule } from '../client/client.module';
import { StockReal } from '../stock-real/entities/stock-real.entity';
import { StockRealModule } from '../stock-real/stock-real.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Stock.name, schema: StockSchema },
    ]),
    forwardRef(() => StockRealModule),
  ],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
