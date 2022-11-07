import { registerEnumType } from '@nestjs/graphql';

export enum CommitteeScalarFieldEnum {
    id = "id",
    name = "name",
    imageUrl = "imageUrl",
    slackChannel = "slackChannel",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CommitteeScalarFieldEnum, { name: 'CommitteeScalarFieldEnum', description: undefined })
