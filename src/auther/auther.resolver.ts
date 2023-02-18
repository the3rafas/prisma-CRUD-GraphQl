import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Auther } from 'src/@generated/prisma-nestjs-graphql/auther/auther.model';
import { AutherService } from './auther.service';
import { AutherCreateInput } from 'src/@generated/prisma-nestjs-graphql/auther/auther-create.input';
import { UpdateOneAutherArgs } from 'src/@generated/prisma-nestjs-graphql/auther/update-one-auther.args';
import { AutherWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/auther/auther-where-unique.input';
import { AutherUpdateWithoutPostsInput } from 'src/@generated/prisma-nestjs-graphql/auther/auther-update-without-posts.input';
import { DeleteOneAutherArgs } from 'src/@generated/prisma-nestjs-graphql/auther/delete-one-auther.args';

@Resolver(() => Auther)
export class AutherResolver {
  constructor(private readonly autherService: AutherService) {}

  @Mutation(() => Auther)
  createAuther(
    @Args('createAutherInput') createAutherInput: AutherCreateInput,
  ) {
    return this.autherService.create(createAutherInput);
  }

  @Query(() => [Auther], { name: 'autherAll' })
  findAll() {
    return this.autherService.findAll();
  }

  @Query(() => Auther, { name: 'auther' })
  findOne(@Args('id') id: AutherWhereUniqueInput) {
    return this.autherService.findOne(id);
  }

  @Mutation(() => Auther)
  updateAuther(
    @Args('updateAutherInput') updateAutherInput: AutherUpdateWithoutPostsInput,
  ) {
    return this.autherService.update(updateAutherInput);
  }

  @Mutation(() => Auther)
  removeAuther(@Args('id') id: AutherWhereUniqueInput) {
    return this.autherService.remove(id);
  }
}
