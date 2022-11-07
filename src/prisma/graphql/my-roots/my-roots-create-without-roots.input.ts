import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutMyRootsInput } from '../profile/profile-create-nested-one-without-my-roots.input';
import { MySkillsCreateNestedManyWithoutMyRootsInput } from '../my-skills/my-skills-create-nested-many-without-my-roots.input';

@InputType()
export class MyRootsCreateWithoutRootsInput {

    @Field(() => ProfileCreateNestedOneWithoutMyRootsInput, {nullable:false})
    profile!: ProfileCreateNestedOneWithoutMyRootsInput;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => MySkillsCreateNestedManyWithoutMyRootsInput, {nullable:true})
    profilesOnSkills?: MySkillsCreateNestedManyWithoutMyRootsInput;
}
