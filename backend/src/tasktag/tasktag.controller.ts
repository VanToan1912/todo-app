import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasktagService } from './tasktag.service';
import { CreateTasktagDto } from './dto/create-tasktag.dto';
import { UpdateTasktagDto } from './dto/update-tasktag.dto';

@Controller('tasktag')
export class TasktagController {
  constructor(private readonly tasktagService: TasktagService) {}

  @Post()
  create(@Body() createTasktagDto: CreateTasktagDto) {
    return this.tasktagService.create(createTasktagDto);
  }

  @Get()
  findAll() {
    return this.tasktagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasktagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTasktagDto: UpdateTasktagDto) {
    return this.tasktagService.update(+id, updateTasktagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasktagService.remove(+id);
  }
}
