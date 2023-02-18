import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AutherWhereUniqueInput } from './auther-where-unique.input';
import { Type } from 'class-transformer';
import { AutherCreateInput } from './auther-create.input';
import { AutherUpdateInput } from './auther-update.input';

@ArgsType()
export class UpsertOneAutherArgs {

    @Field(() => AutherWhereUniqueInput, {nullable:false})
    @Type(() => AutherWhereUniqueInput)
    where!: AutherWhereUniqueInput;

    @Field(() => AutherCreateInput, {nullable:false})
    @Type(() => AutherCreateInput)
    create!: AutherCreateInput;

    @Field(() => AutherUpdateInput, {nullable:false})
    @Type(() => AutherUpdateInput)
    update!: AutherUpdateInput;
}
