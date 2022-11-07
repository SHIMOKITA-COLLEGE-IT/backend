import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsProfileIdSkillIdCompoundUniqueInput } from './my-skills-profile-id-skill-id-compound-unique.input';

@InputType()
export class MySkillsWhereUniqueInput {

    @Field(() => MySkillsProfileIdSkillIdCompoundUniqueInput, {nullable:true})
    profileId_skillId?: MySkillsProfileIdSkillIdCompoundUniqueInput;
}
