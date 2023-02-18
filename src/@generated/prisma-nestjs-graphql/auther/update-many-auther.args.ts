import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AutherUpdateManyMutationInput } from './auther-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AutherWhereInput } from './auther-where.input';

@ArgsType()
export class UpdateManyAutherArgs {

    @Field(() => AutherUpdateManyMutationInput, {nullable:false})
    @Type(() => AutherUpdateManyMutationInput)
    data!: AutherUpdateManyMutationInput;

    @Field(() => AutherWhereInput, {nullable:true})
    @Type(() => AutherWhereInput)
    where?: AutherWhereInput;
}
