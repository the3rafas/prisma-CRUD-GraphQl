import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookUncheckedCreateNestedManyWithoutAuthorInput } from '../book/book-unchecked-create-nested-many-without-author.input';

@InputType()
export class AutherUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => BookUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: BookUncheckedCreateNestedManyWithoutAuthorInput;
}
