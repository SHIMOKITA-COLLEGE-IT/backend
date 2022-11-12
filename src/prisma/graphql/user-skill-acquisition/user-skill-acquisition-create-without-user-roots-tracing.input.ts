import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSkillsInput } from '../user/user-create-nested-one-without-skills.input';
import { SkillCreateNestedOneWithoutUsersInput } from '../skill/skill-create-nested-one-without-users.input';

@InputType()
export class UserSkillAcquisitionCreateWithoutUserRootsTracingInput {

    @Field(() => UserCreateNestedOneWithoutSkillsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSkillsInput;

    @Field(() => SkillCreateNestedOneWithoutUsersInput, {nullable:false})
    skill!: SkillCreateNestedOneWithoutUsersInput;
}
