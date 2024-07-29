import { Test, TestingModule } from '@nestjs/testing';
import { PayphoneController } from './payphone.controller';
import { PayphoneService } from './payphone.service';

describe('PayphoneController', () => {
  let controller: PayphoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayphoneController],
      providers: [PayphoneService],
    }).compile();

    controller = module.get<PayphoneController>(PayphoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
