import { registerEnumType } from '@nestjs/graphql';

export enum HouseScalarFieldEnum {
    id = "id",
    name = "name",
    from = "from",
    to = "to",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HouseScalarFieldEnum, { name: 'HouseScalarFieldEnum', description: undefined })
