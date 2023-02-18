import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { BookUncheckedCreateNestedManyWithoutAuthorInput } from '../book/book-unchecked-create-nested-many-without-author.input';

@InputType()
export class AutherUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsNotEmpty()
    name?: string;

    @Field(() => BookUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: BookUncheckedCreateNestedManyWithoutAuthorInput;
}
