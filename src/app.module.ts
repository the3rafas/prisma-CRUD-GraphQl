import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { AutherModule } from './auther/auther.module';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo/dist/interfaces';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { PrismaModule } from 'nestjs-prisma';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: true,
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    BookModule,
    AutherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
