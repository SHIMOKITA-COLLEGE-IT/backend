import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutSkillsNestedInput } from '../user/user-update-one-required-without-skills-nested.input';
import { UserRootsTracingUpdateOneWithoutUserSkillAcquisitionsNestedInput } from '../user-roots-tracing/user-roots-tracing-update-one-without-user-skill-acquisitions-nested.input';

@InputType()
export class UserSkillAcquisitionUpdateWithoutSkillInput {

    @Field(() => UserUpdateOneRequiredWithoutSkillsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput;

    @Field(() => UserRootsTracingUpdateOneWithoutUserSkillAcquisitionsNestedInput, {nullable:true})
    userRootsTracing?: UserRootsTracingUpdateOneWithoutUserSkillAcquisitionsNestedInput;
}
