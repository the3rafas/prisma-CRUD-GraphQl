import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BookListRelationFilter } from '../book/book-list-relation-filter.input';

@InputType()
export class AutherWhereInput {

    @Field(() => [AutherWhereInput], {nullable:true})
    AND?: Array<AutherWhereInput>;

    @Field(() => [AutherWhereInput], {nullable:true})
    OR?: Array<AutherWhereInput>;

    @Field(() => [AutherWhereInput], {nullable:true})
    NOT?: Array<AutherWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => BookListRelationFilter, {nullable:true})
    posts?: BookListRelationFilter;
}
