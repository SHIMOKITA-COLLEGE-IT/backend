import { registerEnumType } from '@nestjs/graphql';

export enum ShimokitaCollegeProfileScalarFieldEnum {
    id = "id",
    profileId = "profileId",
    isAlumni = "isAlumni",
    slackEmail = "slackEmail",
    roomNumber = "roomNumber",
    postNumber = "postNumber",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ShimokitaCollegeProfileScalarFieldEnum, { name: 'ShimokitaCollegeProfileScalarFieldEnum', description: undefined })
