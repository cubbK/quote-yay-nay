import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver('Quote')
export class QuoteResolver {
  @Query('quote')
  async getQuoteById(@Args('id') id: number) {
    return {
      author: 'hey',
    };
  }
}
