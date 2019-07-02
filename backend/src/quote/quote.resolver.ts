import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { QuoteService } from './quote.service';

@Resolver('Quote')
export class QuoteResolver {
  constructor(public quoteService: QuoteService) {}

  @Query('quote')
  async getQuoteById(@Args('id') id: number) {
    return this.quoteService.getQuoteById(id)
  }

  @Mutation()
  async createQuote(@Args('author') author: string, @Args('content') content: string) {
    return await this.quoteService.createQuote({author, content});
  }
}
