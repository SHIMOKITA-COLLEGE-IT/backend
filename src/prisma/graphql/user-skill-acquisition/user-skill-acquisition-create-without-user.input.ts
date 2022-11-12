import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateNestedOneWithoutUsersInput } from '../skill/skill-create-nested-one-without-users.input';
import { UserRootsTracingCreateNestedOneWithoutUserSkillAcquisitionsInput } from '../user-roots-tracing/user-roots-tracing-create-nested-one-without-user-skill-acquisitions.input';

@InputType()
export class UserSkillAcquisitionCreateWithoutUserInput {

    @Field(() => SkillCreateNestedOneWithoutUsersInput, {nullable:false})
    skill!: SkillCreateNestedOneWithoutUsersInput;

    @Field(() => UserRootsTracingCreateNestedOneWithoutUserSkillAcquisitionsInput, {nullable:true})
    userRootsTracing?: UserRootsTracingCreateNestedOneWithoutUserSkillAcquisitionsInput;
}
