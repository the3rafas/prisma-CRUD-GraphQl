import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AutherWhereInput } from './auther-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAutherArgs {

    @Field(() => AutherWhereInput, {nullable:true})
    @Type(() => AutherWhereInput)
    where?: AutherWhereInput;
}
