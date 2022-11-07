import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutMySkillsInput } from '../profile/profile-create-nested-one-without-my-skills.input';
import { MyRootsCreateNestedOneWithoutProfilesOnSkillsInput } from '../my-roots/my-roots-create-nested-one-without-profiles-on-skills.input';

@InputType()
export class MySkillsCreateWithoutSkillInput {

    @Field(() => ProfileCreateNestedOneWithoutMySkillsInput, {nullable:false})
    profile!: ProfileCreateNestedOneWithoutMySkillsInput;

    @Field(() => MyRootsCreateNestedOneWithoutProfilesOnSkillsInput, {nullable:true})
    myRoots?: MyRootsCreateNestedOneWithoutProfilesOnSkillsInput;
}
