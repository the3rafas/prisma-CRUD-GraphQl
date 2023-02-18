import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AutherCreateNestedOneWithoutPostsInput } from '../auther/auther-create-nested-one-without-posts.input';

@InputType()
export class BookCreateInput {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  @Validator.IsNotEmpty()
  title!: string;

  @Field(() => String, { nullable: false })
  @Validator.IsString()
  @Validator.IsNotEmpty()
  content: string;

  @Field(() => Boolean, { nullable: true })
  published?: boolean;

  @Field(() => String, { nullable: false })
  authorId: string;
}
