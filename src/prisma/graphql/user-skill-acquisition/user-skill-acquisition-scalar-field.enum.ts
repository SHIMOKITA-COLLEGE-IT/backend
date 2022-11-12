import { registerEnumType } from '@nestjs/graphql';

export enum UserSkillAcquisitionScalarFieldEnum {
    userId = "userId",
    skillId = "skillId",
    rootsId = "rootsId"
}


registerEnumType(UserSkillAcquisitionScalarFieldEnum, { name: 'UserSkillAcquisitionScalarFieldEnum', description: undefined })
