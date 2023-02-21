import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateNestedManyWithoutAuthorInput } from '../book/book-create-nested-many-without-author.input';

@InputType()
export class AutherCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => BookCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: BookCreateNestedManyWithoutAuthorInput;
}
