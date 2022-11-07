import { registerEnumType } from '@nestjs/graphql';

export enum HomeScalarFieldEnum {
    id = "id",
    name = "name",
    from = "from",
    to = "to",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HomeScalarFieldEnum, { name: 'HomeScalarFieldEnum', description: undefined })
