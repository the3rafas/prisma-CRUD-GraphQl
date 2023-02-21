import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class BookMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @HideField()
    delete?: boolean;
}
