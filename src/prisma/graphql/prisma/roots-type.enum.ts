import { registerEnumType } from '@nestjs/graphql';

export enum RootsType {
    COUNTRY = "COUNTRY",
    HOMETOWN = "HOMETOWN",
    EDUCATION = "EDUCATION",
    WORK = "WORK",
    GROUP = "GROUP"
}


registerEnumType(RootsType, { name: 'RootsType', description: undefined })
