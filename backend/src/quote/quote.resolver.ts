import { Resolver, Query, Args } from '@nestjs/graphql';
import { QuoteService } from './quote.service';

@Resolver('Quote')
export class QuoteResolver {
  constructor(public quoteService: QuoteService) {}

  @Query('quote')
  async getQuoteById(@Args('id') id: number) {
    return this.quoteService.getQuoteById(id)
  }
}
