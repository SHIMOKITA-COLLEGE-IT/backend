import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateOneRequiredWithoutMySkillsNestedInput } from '../profile/profile-update-one-required-without-my-skills-nested.input';
import { SkillUpdateOneRequiredWithoutProfilesNestedInput } from '../skill/skill-update-one-required-without-profiles-nested.input';

@InputType()
export class MySkillsUpdateWithoutMyRootsInput {

    @Field(() => ProfileUpdateOneRequiredWithoutMySkillsNestedInput, {nullable:true})
    profile?: ProfileUpdateOneRequiredWithoutMySkillsNestedInput;

    @Field(() => SkillUpdateOneRequiredWithoutProfilesNestedInput, {nullable:true})
    skill?: SkillUpdateOneRequiredWithoutProfilesNestedInput;
}
