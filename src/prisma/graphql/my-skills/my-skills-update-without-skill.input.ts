import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateOneRequiredWithoutMySkillsNestedInput } from '../profile/profile-update-one-required-without-my-skills-nested.input';
import { MyRootsUpdateOneWithoutProfilesOnSkillsNestedInput } from '../my-roots/my-roots-update-one-without-profiles-on-skills-nested.input';

@InputType()
export class MySkillsUpdateWithoutSkillInput {

    @Field(() => ProfileUpdateOneRequiredWithoutMySkillsNestedInput, {nullable:true})
    profile?: ProfileUpdateOneRequiredWithoutMySkillsNestedInput;

    @Field(() => MyRootsUpdateOneWithoutProfilesOnSkillsNestedInput, {nullable:true})
    myRoots?: MyRootsUpdateOneWithoutProfilesOnSkillsNestedInput;
}
