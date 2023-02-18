import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Book } from '../book/book.model';
import { AutherCount } from './auther-count.output';

@ObjectType()
export class Auther {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => [Book], {nullable:true})
    posts?: Array<Book>;

    @Field(() => AutherCount, {nullable:false})
    _count?: AutherCount;
}
