import { registerEnumType } from '@nestjs/graphql';

export enum GenerationScalarFieldEnum {
    id = "id",
    generationType = "generationType",
    name = "name",
    from = "from",
    to = "to",
    emoji = "emoji",
    imageUrl = "imageUrl",
    hexColor = "hexColor",
    slackChannel = "slackChannel",
    description = "description",
    photoUrls = "photoUrls",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(GenerationScalarFieldEnum, { name: 'GenerationScalarFieldEnum', description: undefined })
