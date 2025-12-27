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
  import { Task } from '../../task/entities/task.entity';
  
  @Entity('lists')
  export class List {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column({ nullable: true })
    color?: string;
  
    @ManyToOne(() => User, user => user.lists, { onDelete: 'CASCADE' })
    user: User;
  
    @OneToMany(() => Task, task => task.list)
    tasks: Task[];
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  