import { registerEnumType } from '@nestjs/graphql';

export enum SkillScalarFieldEnum {
    id = "id",
    name = "name",
    parentId = "parentId"
}


registerEnumType(SkillScalarFieldEnum, { name: 'SkillScalarFieldEnum', description: undefined })
