import { Test, TestingModule } from '@nestjs/testing';
import { ProjectHouseController } from './project-house.controller';
import { ProjectHouseService } from './project-house.service';

describe('ProjectHouseController', () => {
  let controller: ProjectHouseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectHouseController],
      providers: [ProjectHouseService],
    }).compile();

    controller = module.get<ProjectHouseController>(ProjectHouseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
