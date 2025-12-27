import { Module } from '@nestjs/common';
import { TasktagService } from './tasktag.service';
import { TasktagController } from './tasktag.controller';

@Module({
  controllers: [TasktagController],
  providers: [TasktagService],
})
export class TasktagModule {}
