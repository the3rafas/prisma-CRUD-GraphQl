import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AutherWhereInput } from './auther-where.input';
import { Type } from 'class-transformer';
import { AutherOrderByWithRelationInput } from './auther-order-by-with-relation.input';
import { AutherWhereUniqueInput } from './auther-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AutherScalarFieldEnum } from './auther-scalar-field.enum';

@ArgsType()
export class FindFirstAutherOrThrowArgs {

    @Field(() => AutherWhereInput, {nullable:true})
    @Type(() => AutherWhereInput)
    where?: AutherWhereInput;

    @Field(() => [AutherOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AutherOrderByWithRelationInput>;

    @Field(() => AutherWhereUniqueInput, {nullable:true})
    cursor?: AutherWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AutherScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AutherScalarFieldEnum>;
}
