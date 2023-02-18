import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AutherWhereInput } from './auther-where.input';

@InputType()
export class AutherRelationFilter {

    @Field(() => AutherWhereInput, {nullable:true})
    is?: AutherWhereInput;

    @Field(() => AutherWhereInput, {nullable:true})
    isNot?: AutherWhereInput;
}
