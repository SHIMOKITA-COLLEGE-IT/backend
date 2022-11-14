import { registerEnumType } from '@nestjs/graphql';

export enum RootsScalarFieldEnum {
    id = "id",
    name = "name",
    rootsType = "rootsType",
    googleMapUrl = "googleMapUrl",
    introductionUrl = "introductionUrl"
}


registerEnumType(RootsScalarFieldEnum, { name: 'RootsScalarFieldEnum', description: undefined })
