import { Test, TestingModule } from '@nestjs/testing';
import { CotaController } from './cota.controller';
import { CotaService } from './cota.service';

describe('CotaController', () => {
  let controller: CotaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotaController],
      providers: [CotaService],
    }).compile();

    controller = module.get<CotaController>(CotaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
