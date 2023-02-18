import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BookCreateInput } from 'src/@generated/prisma-nestjs-graphql/book/book-create.input';
import { BookUpdateWithoutAuthorInput } from 'src/@generated/prisma-nestjs-graphql/book/book-update-without-author.input';
import { BookWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/book/book-where-unique.input';
import { FindUniqueBookArgs } from 'src/@generated/prisma-nestjs-graphql/book/find-unique-book.args';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}
  async create(createBookInput: BookCreateInput) {
    return await this.prisma.book.create({
      data: createBookInput,
    });
  }

  async findAll() {
    return await this.prisma.book.findMany({
      include: {
        author: true,
      },
    });
  }

  async findOne(where: BookWhereUniqueInput) {
    return await this.prisma.book.findUnique({
      where,
      include: { author: true },
    });
  }

  async update(updateBookInput: BookUpdateWithoutAuthorInput) {
    return await this.prisma.book.update({
      data: updateBookInput,
      where: { id: updateBookInput.id.set },
      include: { author: true },
    });
  }
  async remove(where: BookWhereUniqueInput) {
    return await this.prisma.book.delete({
      where: where,
    });
  }
}
