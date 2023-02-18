import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AutherWhereUniqueInput } from './auther-where-unique.input';
import { Type } from 'class-transformer';
import { AutherCreateWithoutPostsInput } from './auther-create-without-posts.input';

@InputType()
export class AutherCreateOrConnectWithoutPostsInput {

    @Field(() => AutherWhereUniqueInput, {nullable:false})
    @Type(() => AutherWhereUniqueInput)
    where!: AutherWhereUniqueInput;

    @Field(() => AutherCreateWithoutPostsInput, {nullable:false})
    @Type(() => AutherCreateWithoutPostsInput)
    create!: AutherCreateWithoutPostsInput;
}
