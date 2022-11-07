import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateOneRequiredWithoutMySkillsNestedInput } from '../profile/profile-update-one-required-without-my-skills-nested.input';
import { SkillUpdateOneRequiredWithoutProfilesNestedInput } from '../skill/skill-update-one-required-without-profiles-nested.input';
import { MyRootsUpdateOneWithoutProfilesOnSkillsNestedInput } from '../my-roots/my-roots-update-one-without-profiles-on-skills-nested.input';

@InputType()
export class MySkillsUpdateInput {

    @Field(() => ProfileUpdateOneRequiredWithoutMySkillsNestedInput, {nullable:true})
    profile?: ProfileUpdateOneRequiredWithoutMySkillsNestedInput;

    @Field(() => SkillUpdateOneRequiredWithoutProfilesNestedInput, {nullable:true})
    skill?: SkillUpdateOneRequiredWithoutProfilesNestedInput;

    @Field(() => MyRootsUpdateOneWithoutProfilesOnSkillsNestedInput, {nullable:true})
    myRoots?: MyRootsUpdateOneWithoutProfilesOnSkillsNestedInput;
}
