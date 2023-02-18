import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AutherUpdateWithoutPostsInput } from './auther-update-without-posts.input';
import { Type } from 'class-transformer';
import { AutherCreateWithoutPostsInput } from './auther-create-without-posts.input';

@InputType()
export class AutherUpsertWithoutPostsInput {

    @Field(() => AutherUpdateWithoutPostsInput, {nullable:false})
    @Type(() => AutherUpdateWithoutPostsInput)
    update!: AutherUpdateWithoutPostsInput;

    @Field(() => AutherCreateWithoutPostsInput, {nullable:false})
    @Type(() => AutherCreateWithoutPostsInput)
    create!: AutherCreateWithoutPostsInput;
}
