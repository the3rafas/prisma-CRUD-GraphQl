import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AutherWhereInput } from './auther-where.input';
import { Type } from 'class-transformer';
import { AutherOrderByWithRelationInput } from './auther-order-by-with-relation.input';
import { AutherWhereUniqueInput } from './auther-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AutherCountAggregateInput } from './auther-count-aggregate.input';
import { AutherMinAggregateInput } from './auther-min-aggregate.input';
import { AutherMaxAggregateInput } from './auther-max-aggregate.input';

@ArgsType()
export class AutherAggregateArgs {

    @Field(() => AutherWhereInput, {nullable:true})
    @Type(() => AutherWhereInput)
    where?: AutherWhereInput;

    @Field(() => [AutherOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AutherOrderByWithRelationInput>;

    @Field(() => AutherWhereUniqueInput, {nullable:true})
    cursor?: AutherWhereUniqueInput;

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
