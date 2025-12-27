import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Task } from '../../task/entities/task.entity';
  
  @Entity('subtasks')
  export class Subtask {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    title: string;
  
    @Column({ default: false })
    isCompleted: boolean;
  
    @ManyToOne(() => Task, task => task.subtasks, { onDelete: 'CASCADE' })
    task: Task;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  