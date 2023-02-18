import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { BookCreateNestedManyWithoutAuthorInput } from '../book/book-create-nested-many-without-author.input';

@InputType()
export class AutherCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsNotEmpty()
    name?: string;

    @Field(() => BookCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: BookCreateNestedManyWithoutAuthorInput;
}
