import { registerEnumType } from '@nestjs/graphql';

export enum SocialLinkType {
    WEBSITE = "WEBSITE",
    INSTAGRAM = "INSTAGRAM",
    TWITTER = "TWITTER",
    FACEBOOK = "FACEBOOK",
    LINE = "LINE",
    SNAPCHAT = "SNAPCHAT",
    TIKTOK = "TIKTOK",
    YOUTUBE = "YOUTUBE",
    GITHUB = "GITHUB",
    BEREAL = "BEREAL",
    LINKTREE = "LINKTREE",
    OTHER = "OTHER"
}


registerEnumType(SocialLinkType, { name: 'SocialLinkType', description: undefined })
