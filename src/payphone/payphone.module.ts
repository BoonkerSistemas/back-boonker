import { Module } from '@nestjs/common';
import { PayphoneService } from './payphone.service';
import { PayphoneController } from './payphone.controller';

@Module({
  controllers: [PayphoneController],
  providers: [PayphoneService],
})
export class PayphoneModule {}
