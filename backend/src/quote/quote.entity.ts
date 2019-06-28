import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

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
}
