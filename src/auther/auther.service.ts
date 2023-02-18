import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AutherCreateInput } from 'src/@generated/prisma-nestjs-graphql/auther/auther-create.input';
import { AutherUpdateWithoutPostsInput } from 'src/@generated/prisma-nestjs-graphql/auther/auther-update-without-posts.input';
import { AutherWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/auther/auther-where-unique.input';

@Injectable()
export class AutherService {
  constructor(private prisma: PrismaService) {}

  async create(createAutherInput: AutherCreateInput) {
    return await this.prisma.auther.create({
      data: createAutherInput,
    });
  }

  async findAll() {
    return await this.prisma.auther.findMany({
      include: {
        posts: true,
      },
    });
  }

  async findOne(where: AutherWhereUniqueInput) {
    return await this.prisma.auther.findUnique({
      where,
      include: {
        posts: true,
      },
    });
  }

  async update(updateAutherInput: AutherUpdateWithoutPostsInput) {
    return await this.prisma.auther.update({
      data: updateAutherInput,
      where: { id: updateAutherInput.id.set },
      include: { posts: true },
    });
  }

  async remove(where: AutherWhereUniqueInput) {
    return await this.prisma.auther.delete({
      where: where,
    });
  }
}
