import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { AutherModule } from './auther/auther.module';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo/dist/interfaces';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: true,
    }),
    BookModule,
    AutherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
