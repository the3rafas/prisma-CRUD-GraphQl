import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AutherCreateNestedOneWithoutPostsInput } from '../auther/auther-create-nested-one-without-posts.input';

@InputType()
export class BookCreateInput {
  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Boolean, { nullable: true })
  published?: boolean;

  @Field(() => String, { nullable: false })
  authorId!: string;
}
