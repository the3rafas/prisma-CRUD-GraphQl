import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { AutherRelationFilter } from '../auther/auther-relation-filter.input';

@InputType()
export class BookWhereInput {

    @Field(() => [BookWhereInput], {nullable:true})
    AND?: Array<BookWhereInput>;

    @Field(() => [BookWhereInput], {nullable:true})
    OR?: Array<BookWhereInput>;

    @Field(() => [BookWhereInput], {nullable:true})
    NOT?: Array<BookWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    published?: BoolNullableFilter;

    @Field(() => AutherRelationFilter, {nullable:true})
    author?: AutherRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: StringNullableFilter;
}
