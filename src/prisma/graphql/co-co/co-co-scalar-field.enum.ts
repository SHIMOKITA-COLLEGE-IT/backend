import { registerEnumType } from '@nestjs/graphql';

export enum CoCoScalarFieldEnum {
    id = "id",
    name = "name",
    imageUrl = "imageUrl",
    slackChannel = "slackChannel",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CoCoScalarFieldEnum, { name: 'CoCoScalarFieldEnum', description: undefined })
