import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { SkillUpdateOneWithoutChildrenNestedInput } from './skill-update-one-without-children-nested.input';
import { UserSkillAcquisitionUpdateManyWithoutSkillNestedInput } from '../user-skill-acquisition/user-skill-acquisition-update-many-without-skill-nested.input';

@InputType()
export class SkillUpdateWithoutChildrenInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => SkillUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: SkillUpdateOneWithoutChildrenNestedInput;

    @Field(() => UserSkillAcquisitionUpdateManyWithoutSkillNestedInput, {nullable:true})
    users?: UserSkillAcquisitionUpdateManyWithoutSkillNestedInput;
}
