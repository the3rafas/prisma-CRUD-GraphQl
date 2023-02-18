import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AutherCreateWithoutPostsInput } from './auther-create-without-posts.input';
import { Type } from 'class-transformer';
import { AutherCreateOrConnectWithoutPostsInput } from './auther-create-or-connect-without-posts.input';
import { AutherWhereUniqueInput } from './auther-where-unique.input';

@InputType()
export class AutherCreateNestedOneWithoutPostsInput {

    @Field(() => AutherCreateWithoutPostsInput, {nullable:true})
    @Type(() => AutherCreateWithoutPostsInput)
    create?: AutherCreateWithoutPostsInput;

    @Field(() => AutherCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => AutherCreateOrConnectWithoutPostsInput)
    connectOrCreate?: AutherCreateOrConnectWithoutPostsInput;

    @Field(() => AutherWhereUniqueInput, {nullable:true})
    @Type(() => AutherWhereUniqueInput)
    connect?: AutherWhereUniqueInput;
}
