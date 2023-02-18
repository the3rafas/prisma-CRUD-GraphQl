import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AutherWhereUniqueInput } from './auther-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAutherOrThrowArgs {

    @Field(() => AutherWhereUniqueInput, {nullable:false})
    @Type(() => AutherWhereUniqueInput)
    where!: AutherWhereUniqueInput;
}
