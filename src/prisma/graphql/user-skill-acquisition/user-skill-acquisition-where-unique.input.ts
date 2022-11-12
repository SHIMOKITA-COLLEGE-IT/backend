import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionUserIdSkillIdCompoundUniqueInput } from './user-skill-acquisition-user-id-skill-id-compound-unique.input';

@InputType()
export class UserSkillAcquisitionWhereUniqueInput {

    @Field(() => UserSkillAcquisitionUserIdSkillIdCompoundUniqueInput, {nullable:true})
    userId_skillId?: UserSkillAcquisitionUserIdSkillIdCompoundUniqueInput;
}
