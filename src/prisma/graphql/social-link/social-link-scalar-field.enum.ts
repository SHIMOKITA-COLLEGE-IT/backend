import { registerEnumType } from '@nestjs/graphql';

export enum SocialLinkScalarFieldEnum {
    id = "id",
    userId = "userId",
    name = "name",
    socialLinkType = "socialLinkType",
    url = "url"
}


registerEnumType(SocialLinkScalarFieldEnum, { name: 'SocialLinkScalarFieldEnum', description: undefined })
