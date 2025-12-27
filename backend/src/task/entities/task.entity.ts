import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { User } from '../../user/entities/user.entity';
  import { List } from '../../list/entities/list.entity';
  import { Subtask } from '../../subtask/entities/subtask.entity';
  import { TaskTag } from '../../tasktag/entities/tasktag.entity';
  
  @Entity('tasks')
  export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    title: string;
  
    @Column({ nullable: true })
    description?: string;
  
    @Column({ type: 'date', nullable: true })
    dueDate?: Date;
  
    @Column({ default: false })
    isCompleted: boolean;
  
    @Column({ nullable: true })
    priority?: number;
  
    @ManyToOne(() => User, user => user.tasks, { onDelete: 'CASCADE' })
    user: User;
  
    @ManyToOne(() => List, list => list.tasks, { nullable: true })
    list?: List;
  
    @OneToMany(() => Subtask, subtask => subtask.task)
    subtasks: Subtask[];
  
    @OneToMany(() => TaskTag, taskTag => taskTag.task)
    tags: TaskTag[];
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  