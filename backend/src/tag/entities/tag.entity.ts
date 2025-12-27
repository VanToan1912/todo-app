import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
  } from 'typeorm';
  import { User } from '../../user/entities/user.entity';
  import { TaskTag } from '../../tasktag/entities/tasktag.entity';
  
  @Entity('tags')
  export class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column({ nullable: true })
    color?: string;
  
    @ManyToOne(() => User, user => user.tags, { onDelete: 'CASCADE' })
    user: User;
  
    @OneToMany(() => TaskTag, taskTag => taskTag.tag)
    tasks: TaskTag[];
  
    @CreateDateColumn()
    createdAt: Date;
  }
  