import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Auther } from '../auther/auther.model';

@ObjectType()
export class Book {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    published!: boolean | null;

    @Field(() => Auther, {nullable:true})
    author?: Auther | null;

    @Field(() => String, {nullable:true})
    authorId!: string | null;
}
