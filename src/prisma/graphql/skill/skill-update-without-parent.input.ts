import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { SkillUpdateManyWithoutParentNestedInput } from './skill-update-many-without-parent-nested.input';
import { UserSkillAcquisitionUpdateManyWithoutSkillNestedInput } from '../user-skill-acquisition/user-skill-acquisition-update-many-without-skill-nested.input';

@InputType()
export class SkillUpdateWithoutParentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => SkillUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: SkillUpdateManyWithoutParentNestedInput;

    @Field(() => UserSkillAcquisitionUpdateManyWithoutSkillNestedInput, {nullable:true})
    users?: UserSkillAcquisitionUpdateManyWithoutSkillNestedInput;
}
