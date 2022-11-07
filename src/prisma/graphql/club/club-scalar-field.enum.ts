import { registerEnumType } from '@nestjs/graphql';

export enum ClubScalarFieldEnum {
    id = "id",
    name = "name",
    imageUrl = "imageUrl",
    slackChannel = "slackChannel",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ClubScalarFieldEnum, { name: 'ClubScalarFieldEnum', description: undefined })
