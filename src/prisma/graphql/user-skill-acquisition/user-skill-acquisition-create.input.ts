import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSkillsInput } from '../user/user-create-nested-one-without-skills.input';
import { SkillCreateNestedOneWithoutUsersInput } from '../skill/skill-create-nested-one-without-users.input';
import { UserRootsTracingCreateNestedOneWithoutUserSkillAcquisitionsInput } from '../user-roots-tracing/user-roots-tracing-create-nested-one-without-user-skill-acquisitions.input';

@InputType()
export class UserSkillAcquisitionCreateInput {

    @Field(() => UserCreateNestedOneWithoutSkillsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSkillsInput;

    @Field(() => SkillCreateNestedOneWithoutUsersInput, {nullable:false})
    skill!: SkillCreateNestedOneWithoutUsersInput;

    @Field(() => UserRootsTracingCreateNestedOneWithoutUserSkillAcquisitionsInput, {nullable:true})
    userRootsTracing?: UserRootsTracingCreateNestedOneWithoutUserSkillAcquisitionsInput;
}
