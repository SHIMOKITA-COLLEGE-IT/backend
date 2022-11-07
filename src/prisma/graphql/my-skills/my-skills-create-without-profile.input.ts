import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateNestedOneWithoutProfilesInput } from '../skill/skill-create-nested-one-without-profiles.input';
import { MyRootsCreateNestedOneWithoutProfilesOnSkillsInput } from '../my-roots/my-roots-create-nested-one-without-profiles-on-skills.input';

@InputType()
export class MySkillsCreateWithoutProfileInput {

    @Field(() => SkillCreateNestedOneWithoutProfilesInput, {nullable:false})
    skill!: SkillCreateNestedOneWithoutProfilesInput;

    @Field(() => MyRootsCreateNestedOneWithoutProfilesOnSkillsInput, {nullable:true})
    myRoots?: MyRootsCreateNestedOneWithoutProfilesOnSkillsInput;
}
