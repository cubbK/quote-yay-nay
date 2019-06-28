import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { QuoteResolver } from './quote/quote.resolver';
import { UserResolver } from './user/user.resolver';
import { QuoteService } from './quote/quote.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'quotes',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      typePaths: [join(process.cwd(), 'src/**/*.graphql')],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
      },
    }),
  ],
  providers: [ QuoteResolver, UserResolver, QuoteService],
})
export class AppModule { }
