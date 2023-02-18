import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AutherCountAggregate } from './auther-count-aggregate.output';
import { AutherMinAggregate } from './auther-min-aggregate.output';
import { AutherMaxAggregate } from './auther-max-aggregate.output';

@ObjectType()
export class AutherGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => AutherCountAggregate, {nullable:true})
    _count?: AutherCountAggregate;

    @Field(() => AutherMinAggregate, {nullable:true})
    _min?: AutherMinAggregate;

    @Field(() => AutherMaxAggregate, {nullable:true})
    _max?: AutherMaxAggregate;
}
