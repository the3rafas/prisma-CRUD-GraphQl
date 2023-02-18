import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class AutherScalarWhereWithAggregatesInput {

    @Field(() => [AutherScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AutherScalarWhereWithAggregatesInput>;

    @Field(() => [AutherScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AutherScalarWhereWithAggregatesInput>;

    @Field(() => [AutherScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AutherScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;
}
