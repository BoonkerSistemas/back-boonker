import { Test, TestingModule } from '@nestjs/testing';
import { ProjectHouseService } from './project-house.service';

describe('ProjectHouseService', () => {
  let service: ProjectHouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectHouseService],
    }).compile();

    service = module.get<ProjectHouseService>(ProjectHouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
