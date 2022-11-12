import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillUpdateOneRequiredWithoutUsersNestedInput } from '../skill/skill-update-one-required-without-users-nested.input';
import { UserRootsTracingUpdateOneWithoutUserSkillAcquisitionsNestedInput } from '../user-roots-tracing/user-roots-tracing-update-one-without-user-skill-acquisitions-nested.input';

@InputType()
export class UserSkillAcquisitionUpdateWithoutUserInput {

    @Field(() => SkillUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => UserRootsTracingUpdateOneWithoutUserSkillAcquisitionsNestedInput, {nullable:true})
    userRootsTracing?: UserRootsTracingUpdateOneWithoutUserSkillAcquisitionsNestedInput;
}
