import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AutherCreateWithoutPostsInput } from './auther-create-without-posts.input';
import { Type } from 'class-transformer';
import { AutherCreateOrConnectWithoutPostsInput } from './auther-create-or-connect-without-posts.input';
import { AutherUpsertWithoutPostsInput } from './auther-upsert-without-posts.input';
import { AutherWhereUniqueInput } from './auther-where-unique.input';
import { AutherUpdateWithoutPostsInput } from './auther-update-without-posts.input';

@InputType()
export class AutherUpdateOneWithoutPostsNestedInput {

    @Field(() => AutherCreateWithoutPostsInput, {nullable:true})
    @Type(() => AutherCreateWithoutPostsInput)
    create?: AutherCreateWithoutPostsInput;

    @Field(() => AutherCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => AutherCreateOrConnectWithoutPostsInput)
    connectOrCreate?: AutherCreateOrConnectWithoutPostsInput;

    @Field(() => AutherUpsertWithoutPostsInput, {nullable:true})
    @Type(() => AutherUpsertWithoutPostsInput)
    upsert?: AutherUpsertWithoutPostsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AutherWhereUniqueInput, {nullable:true})
    @Type(() => AutherWhereUniqueInput)
    connect?: AutherWhereUniqueInput;

    @Field(() => AutherUpdateWithoutPostsInput, {nullable:true})
    @Type(() => AutherUpdateWithoutPostsInput)
    update?: AutherUpdateWithoutPostsInput;
}
