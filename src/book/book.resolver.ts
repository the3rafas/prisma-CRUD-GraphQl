import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookCreateInput } from 'src/@generated/prisma-nestjs-graphql/book/book-create.input';
import { UpdateOneBookArgs } from 'src/@generated/prisma-nestjs-graphql/book/update-one-book.args';
import { Book } from 'src/@generated/prisma-nestjs-graphql/book/book.model';
import { BookService } from './book.service';
import { FindUniqueBookArgs } from 'src/@generated/prisma-nestjs-graphql/book/find-unique-book.args';
import { BookWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/book/book-where-unique.input';
import { BookUpdateWithoutAuthorInput } from 'src/@generated/prisma-nestjs-graphql/book/book-update-without-author.input';
// import { Book } from './entities/book.entity';
// import { CreateBookInput } from './dto/create-book.input';
// import { UpdateBookInput } from './dto/update-book.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: BookCreateInput) {
    return this.bookService.create(createBookInput);
  }

  @Query(() => [Book], { name: 'bookAll' })
  findAll() {
    return this.bookService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id') id: BookWhereUniqueInput) {
    return this.bookService.findOne(id);
  }

  @Mutation(() => Book)
  updateBook(
    @Args('updateBookInput') updateBookInput: BookUpdateWithoutAuthorInput,
  ) {
    return this.bookService.update(updateBookInput);
  }

  @Mutation(() => Book)
  removeBook(@Args('id') id: BookWhereUniqueInput) {
    return this.bookService.remove(id);
  }
}
