import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutMySkillsInput } from '../profile/profile-create-nested-one-without-my-skills.input';
import { SkillCreateNestedOneWithoutProfilesInput } from '../skill/skill-create-nested-one-without-profiles.input';

@InputType()
export class MySkillsCreateWithoutMyRootsInput {

    @Field(() => ProfileCreateNestedOneWithoutMySkillsInput, {nullable:false})
    profile!: ProfileCreateNestedOneWithoutMySkillsInput;

    @Field(() => SkillCreateNestedOneWithoutProfilesInput, {nullable:false})
    skill!: SkillCreateNestedOneWithoutProfilesInput;
}
