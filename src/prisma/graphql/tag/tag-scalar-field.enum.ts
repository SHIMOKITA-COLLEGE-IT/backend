import { registerEnumType } from '@nestjs/graphql';

export enum TagScalarFieldEnum {
    id = "id",
    name = "name",
    iconUrl = "iconUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TagScalarFieldEnum, { name: 'TagScalarFieldEnum', description: undefined })
