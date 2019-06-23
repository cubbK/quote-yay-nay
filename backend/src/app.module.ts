import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { QuoteResolver } from './quote/quote.resolver';
import { UserResolver } from './user/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: [join(process.cwd(), 'src/**/*.graphql')],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, QuoteResolver, UserResolver],
})
export class AppModule { }
