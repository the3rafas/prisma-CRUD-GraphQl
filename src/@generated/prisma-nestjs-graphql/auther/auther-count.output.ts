import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AutherCount {

    @Field(() => Int, {nullable:false})
    posts?: number;
}
