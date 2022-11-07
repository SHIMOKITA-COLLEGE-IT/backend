import { registerEnumType } from '@nestjs/graphql';

export enum ProgramScalarFieldEnum {
    id = "id",
    name = "name",
    from = "from",
    to = "to",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProgramScalarFieldEnum, { name: 'ProgramScalarFieldEnum', description: undefined })
