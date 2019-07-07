import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { QuoteService } from './quote.service';
import { ResolveProperty, Parent } from '@nestjs/graphql';

@Resolver('Quote')
export class QuoteResolver {
  constructor(public quoteService: QuoteService) { }

  @Query('quote')
  async getQuoteById(@Args('id') id: number) {
    const quote = await this.quoteService.getQuoteById(id);
    return quote;
  }

  @Query('quotes')
  async getAllQuotes(@Args('skip') skip: number, @Args('take') take: number) {
    const quotes = await this.quoteService.getQuotes({skip, take});
    return quotes;
  }

  @ResolveProperty()
  async users(@Parent() quote) {
    const { id } = quote;
    // console.log(id);
    return [];
    return await this.quoteService.findUsers({ quoteId: id });

  }

  @Mutation()
  async createQuote(@Args('author') author: string, @Args('content') content: string) {
    return await this.quoteService.createQuote({ author, content });
  }
}
