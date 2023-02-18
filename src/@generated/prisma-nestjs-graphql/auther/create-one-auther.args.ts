import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AutherCreateInput } from './auther-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAutherArgs {

    @Field(() => AutherCreateInput, {nullable:false})
    @Type(() => AutherCreateInput)
    data!: AutherCreateInput;
}
