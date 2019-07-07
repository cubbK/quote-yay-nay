import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class Quote {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  date: string;

  @Column()
  content: string;

  @Column()
  author: string;

  @Column()
  numberOfUpVotes: number;

  @Column()
  numberOfDownVotes: number;

  @Column()
  completed: boolean;

  @ManyToMany(type => User, user => user.quotes)
  @JoinTable()
  users: User[];
}
