import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class AutherUncheckedCreateWithoutPostsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsNotEmpty()
    name?: string;
}
