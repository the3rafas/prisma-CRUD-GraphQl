import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BookUncheckedUpdateManyWithoutAuthorNestedInput } from '../book/book-unchecked-update-many-without-author-nested.input';

@InputType()
export class AutherUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BookUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: BookUncheckedUpdateManyWithoutAuthorNestedInput;
}
