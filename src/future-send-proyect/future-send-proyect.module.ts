import { Module } from '@nestjs/common';
import { FutureSendProyectService } from './future-send-proyect.service';
import { FutureSendProyectController } from './future-send-proyect.controller';

@Module({
  controllers: [FutureSendProyectController],
  providers: [FutureSendProyectService],
})
export class FutureSendProyectModule {}
