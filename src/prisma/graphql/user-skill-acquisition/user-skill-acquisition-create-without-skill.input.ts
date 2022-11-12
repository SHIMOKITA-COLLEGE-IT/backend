import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSkillsInput } from '../user/user-create-nested-one-without-skills.input';
import { UserRootsTracingCreateNestedOneWithoutUserSkillAcquisitionsInput } from '../user-roots-tracing/user-roots-tracing-create-nested-one-without-user-skill-acquisitions.input';

@InputType()
export class UserSkillAcquisitionCreateWithoutSkillInput {

    @Field(() => UserCreateNestedOneWithoutSkillsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSkillsInput;

    @Field(() => UserRootsTracingCreateNestedOneWithoutUserSkillAcquisitionsInput, {nullable:true})
    userRootsTracing?: UserRootsTracingCreateNestedOneWithoutUserSkillAcquisitionsInput;
}
