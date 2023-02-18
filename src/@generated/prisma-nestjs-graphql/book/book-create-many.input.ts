import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class BookCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.IsNotEmpty()
    title!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsNotEmpty()
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => String, {nullable:true})
    authorId?: string;
}
