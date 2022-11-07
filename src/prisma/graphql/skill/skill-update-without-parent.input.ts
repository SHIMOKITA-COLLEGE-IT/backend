import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { SkillUpdateManyWithoutParentNestedInput } from './skill-update-many-without-parent-nested.input';
import { MySkillsUpdateManyWithoutSkillNestedInput } from '../my-skills/my-skills-update-many-without-skill-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class SkillUpdateWithoutParentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => SkillUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: SkillUpdateManyWithoutParentNestedInput;

    @Field(() => MySkillsUpdateManyWithoutSkillNestedInput, {nullable:true})
    profiles?: MySkillsUpdateManyWithoutSkillNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
