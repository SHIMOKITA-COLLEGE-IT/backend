import { registerEnumType } from '@nestjs/graphql';

export enum GroupType {
    COMMITTEE = "COMMITTEE",
    CLUB = "CLUB"
}


registerEnumType(GroupType, { name: 'GroupType', description: undefined })
