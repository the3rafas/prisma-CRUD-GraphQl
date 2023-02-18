import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AutherWhereInput } from './auther-where.input';
import { Type } from 'class-transformer';
import { AutherOrderByWithAggregationInput } from './auther-order-by-with-aggregation.input';
import { AutherScalarFieldEnum } from './auther-scalar-field.enum';
import { AutherScalarWhereWithAggregatesInput } from './auther-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AutherCountAggregateInput } from './auther-count-aggregate.input';
import { AutherMinAggregateInput } from './auther-min-aggregate.input';
import { AutherMaxAggregateInput } from './auther-max-aggregate.input';

@ArgsType()
export class AutherGroupByArgs {

    @Field(() => AutherWhereInput, {nullable:true})
    @Type(() => AutherWhereInput)
    where?: AutherWhereInput;

    @Field(() => [AutherOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AutherOrderByWithAggregationInput>;

    @Field(() => [AutherScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AutherScalarFieldEnum>;

    @Field(() => AutherScalarWhereWithAggregatesInput, {nullable:true})
    having?: AutherScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AutherCountAggregateInput, {nullable:true})
    _count?: AutherCountAggregateInput;

    @Field(() => AutherMinAggregateInput, {nullable:true})
    _min?: AutherMinAggregateInput;

    @Field(() => AutherMaxAggregateInput, {nullable:true})
    _max?: AutherMaxAggregateInput;
}
