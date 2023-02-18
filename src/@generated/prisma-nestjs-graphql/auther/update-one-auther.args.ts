import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AutherUpdateInput } from './auther-update.input';
import { Type } from 'class-transformer';
import { AutherWhereUniqueInput } from './auther-where-unique.input';

@ArgsType()
export class UpdateOneAutherArgs {

    @Field(() => AutherUpdateInput, {nullable:false})
    @Type(() => AutherUpdateInput)
    data!: AutherUpdateInput;

    @Field(() => AutherWhereUniqueInput, {nullable:false})
    @Type(() => AutherWhereUniqueInput)
    where!: AutherWhereUniqueInput;
}
