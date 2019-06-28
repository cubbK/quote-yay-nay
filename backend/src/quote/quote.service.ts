import { Injectable } from '@nestjs/common';

@Injectable()
export class QuoteService {
  getQuoteById(id: number) {
    return {
      author: 'hey1',
    };
  }

}
