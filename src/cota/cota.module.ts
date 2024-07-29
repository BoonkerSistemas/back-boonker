import { Module } from '@nestjs/common';
import { CotaService } from './cota.service';
import { CotaController } from './cota.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cota, CotaSchema } from './entities/cota.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Cota.name, schema: CotaSchema}])],

  controllers: [CotaController],
  providers: [CotaService],
})
export class CotaModule {}
