import { registerEnumType } from '@nestjs/graphql';

export enum SkillScalarFieldEnum {
    id = "id",
    name = "name",
    parentId = "parentId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SkillScalarFieldEnum, { name: 'SkillScalarFieldEnum', description: undefined })
