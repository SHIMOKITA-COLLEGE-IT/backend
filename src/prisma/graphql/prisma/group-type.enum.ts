import { registerEnumType } from '@nestjs/graphql';

export enum GroupType {
    PROGRAM = "PROGRAM",
    HOUSE = "HOUSE",
    HOME = "HOME",
    COMMITTEE = "COMMITTEE",
    CLUB = "CLUB"
}


registerEnumType(GroupType, { name: 'GroupType', description: undefined })
