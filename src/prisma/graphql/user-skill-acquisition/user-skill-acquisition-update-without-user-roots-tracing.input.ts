import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutSkillsNestedInput } from '../user/user-update-one-required-without-skills-nested.input';
import { SkillUpdateOneRequiredWithoutUsersNestedInput } from '../skill/skill-update-one-required-without-users-nested.input';

@InputType()
export class UserSkillAcquisitionUpdateWithoutUserRootsTracingInput {

    @Field(() => UserUpdateOneRequiredWithoutSkillsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput;

    @Field(() => SkillUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput;
}
