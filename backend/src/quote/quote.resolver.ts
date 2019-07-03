import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { QuoteService } from './quote.service';

@Resolver('Quote')
export class QuoteResolver {
  constructor(public quoteService: QuoteService) {}

  @Query('quote')
  async getQuoteById(@Args('id') id: number) {
    const quote = await this.quoteService.getQuoteById(id);
    return { id: 1, author: 'hey'};
  }

  @Mutation()
  async createQuote(@Args('author') author: string, @Args('content') content: string) {
    return await this.quoteService.createQuote({author, content});
  }
}
