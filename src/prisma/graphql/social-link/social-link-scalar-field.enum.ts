import { registerEnumType } from '@nestjs/graphql';

export enum SocialLinkScalarFieldEnum {
    id = "id",
    profileId = "profileId",
    name = "name",
    socialLinkType = "socialLinkType",
    url = "url"
}


registerEnumType(SocialLinkScalarFieldEnum, { name: 'SocialLinkScalarFieldEnum', description: undefined })
