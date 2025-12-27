import { Injectable } from '@nestjs/common';
import { CreateTasktagDto } from './dto/create-tasktag.dto';
import { UpdateTasktagDto } from './dto/update-tasktag.dto';

@Injectable()
export class TasktagService {
  create(createTasktagDto: CreateTasktagDto) {
    return 'This action adds a new tasktag';
  }

  findAll() {
    return `This action returns all tasktag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tasktag`;
  }

  update(id: number, updateTasktagDto: UpdateTasktagDto) {
    return `This action updates a #${id} tasktag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tasktag`;
  }
}
