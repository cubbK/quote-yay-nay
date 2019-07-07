import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Quote } from 'src/quote/quote.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  google: string;

  @ManyToMany(type => Quote, quote => quote.users)
  quotes: Quote[];
}