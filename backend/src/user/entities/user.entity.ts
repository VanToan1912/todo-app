import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { List } from '../../list/entities/list.entity';
  import { Task } from '../../task/entities/task.entity';
  import { Tag } from '../../tag/entities/tag.entity';
  
  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;
  
    @Column({ nullable: true })
    name?: string;
  
    @Column({ default: false })
    isPro: boolean;
  
    @OneToMany(() => List, list => list.user)
    lists: List[];
  
    @OneToMany(() => Task, task => task.user)
    tasks: Task[];
  
    @OneToMany(() => Tag, tag => tag.user)
    tags: Tag[];
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  