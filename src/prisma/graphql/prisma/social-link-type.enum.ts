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
    LINKTREE = "LINKTREE"
}


registerEnumType(SocialLinkType, { name: 'SocialLinkType', description: undefined })
