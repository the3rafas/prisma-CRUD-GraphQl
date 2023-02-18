import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AutherCreateManyInput } from './auther-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAutherArgs {

    @Field(() => [AutherCreateManyInput], {nullable:false})
    @Type(() => AutherCreateManyInput)
    data!: Array<AutherCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
