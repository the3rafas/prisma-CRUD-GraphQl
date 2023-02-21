import { registerEnumType } from '@nestjs/graphql';

export enum BookScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    published = "published",
    authorId = "authorId",
    'delete' = "delete"
}


registerEnumType(BookScalarFieldEnum, { name: 'BookScalarFieldEnum', description: undefined })
