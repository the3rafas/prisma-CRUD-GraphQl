import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { AutherUpdateOneWithoutPostsNestedInput } from '../auther/auther-update-one-without-posts-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { Type } from 'class-transformer';

@InputType()
export class BookUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    content?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    published?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => AutherUpdateOneWithoutPostsNestedInput, {nullable:true})
    author?: AutherUpdateOneWithoutPostsNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    @Type(() => BoolFieldUpdateOperationsInput)
    delete?: BoolFieldUpdateOperationsInput;
}
