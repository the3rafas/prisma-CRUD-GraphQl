import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AutherOrderByWithRelationInput } from '../auther/auther-order-by-with-relation.input';

@InputType()
export class BookOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @Field(() => AutherOrderByWithRelationInput, {nullable:true})
    author?: AutherOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
}
