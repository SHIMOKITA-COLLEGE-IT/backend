import { registerEnumType } from '@nestjs/graphql';

export enum MySkillsScalarFieldEnum {
    profileId = "profileId",
    skillId = "skillId",
    myRootsId = "myRootsId"
}


registerEnumType(MySkillsScalarFieldEnum, { name: 'MySkillsScalarFieldEnum', description: undefined })
