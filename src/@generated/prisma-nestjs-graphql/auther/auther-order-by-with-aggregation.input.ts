import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AutherCountOrderByAggregateInput } from './auther-count-order-by-aggregate.input';
import { AutherMaxOrderByAggregateInput } from './auther-max-order-by-aggregate.input';
import { AutherMinOrderByAggregateInput } from './auther-min-order-by-aggregate.input';

@InputType()
export class AutherOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => AutherCountOrderByAggregateInput, {nullable:true})
    _count?: AutherCountOrderByAggregateInput;

    @Field(() => AutherMaxOrderByAggregateInput, {nullable:true})
    _max?: AutherMaxOrderByAggregateInput;

    @Field(() => AutherMinOrderByAggregateInput, {nullable:true})
    _min?: AutherMinOrderByAggregateInput;
}
