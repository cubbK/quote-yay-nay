import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { QuoteModule } from './quote/quote.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
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
    QuoteModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule { }
