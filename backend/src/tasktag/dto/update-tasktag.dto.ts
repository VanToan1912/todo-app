import { PartialType } from '@nestjs/mapped-types';
import { CreateTasktagDto } from './create-tasktag.dto';

export class UpdateTasktagDto extends PartialType(CreateTasktagDto) {}
