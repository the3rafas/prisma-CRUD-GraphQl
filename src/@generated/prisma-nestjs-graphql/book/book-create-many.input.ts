import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
}
