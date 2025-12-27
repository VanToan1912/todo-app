import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ListModule } from './list/list.module';
import { TaskModule } from './task/task.module';
import { SubtaskModule } from './subtask/subtask.module';
import { TagModule } from './tag/tag.module';
import { TasktagModule } from './tasktag/tasktag.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, ListModule, TaskModule, SubtaskModule, TagModule, TasktagModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
