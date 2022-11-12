import { registerEnumType } from '@nestjs/graphql';

export enum GroupScalarFieldEnum {
    id = "id",
    groupType = "groupType",
    name = "name",
    from = "from",
    to = "to",
    emoji = "emoji",
    imageUrl = "imageUrl",
    slackChannel = "slackChannel",
    description = "description",
    photoUrls = "photoUrls",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(GroupScalarFieldEnum, { name: 'GroupScalarFieldEnum', description: undefined })
