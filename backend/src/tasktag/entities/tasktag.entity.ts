import {
    Entity,
    ManyToOne,
    PrimaryColumn,
  } from 'typeorm';
  import { Task } from '../../task/entities/task.entity';
  import { Tag } from '../../tag/entities/tag.entity';
  
  @Entity('task_tags')
  export class TaskTag {
    @PrimaryColumn('uuid')
    taskId: string;
  
    @PrimaryColumn('uuid')
    tagId: string;
  
    @ManyToOne(() => Task, task => task.tags, { onDelete: 'CASCADE' })
    task: Task;
  
    @ManyToOne(() => Tag, tag => tag.tasks, { onDelete: 'CASCADE' })
    tag: Tag;
  }
  