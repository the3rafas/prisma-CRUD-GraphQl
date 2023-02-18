import { registerEnumType } from '@nestjs/graphql';

export enum AutherScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(AutherScalarFieldEnum, { name: 'AutherScalarFieldEnum', description: undefined })
