import { Test, TestingModule } from '@nestjs/testing';
import { TasktagService } from './tasktag.service';

describe('TasktagService', () => {
  let service: TasktagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasktagService],
    }).compile();

    service = module.get<TasktagService>(TasktagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
