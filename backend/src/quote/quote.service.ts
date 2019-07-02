
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuoteDto } from './createQuote.dto';
import { Quote } from './quote.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote)
    private readonly quoteRepository: Repository<Quote>
  ) { }
  getQuoteById(id: number) {
    return {
      author: 'hey1',
    };
  }

  async createQuote(props: CreateQuoteDto) {
    const quote = new Quote();

    quote.author = props.author;
    quote.content = props.content;

    quote.completed = false;
    quote.numberOfDownVotes = 0;
    quote.numberOfUpVotes = 0;

    return await this.quoteRepository.save(quote);
  }

}
