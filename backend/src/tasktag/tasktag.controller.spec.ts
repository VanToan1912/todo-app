import { Test, TestingModule } from '@nestjs/testing';
import { TasktagController } from './tasktag.controller';
import { TasktagService } from './tasktag.service';

describe('TasktagController', () => {
  let controller: TasktagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasktagController],
      providers: [TasktagService],
    }).compile();

    controller = module.get<TasktagController>(TasktagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
