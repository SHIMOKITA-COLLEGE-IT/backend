import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { SkillUncheckedUpdateManyWithoutParentNestedInput } from './skill-unchecked-update-many-without-parent-nested.input';
import { MySkillsUncheckedUpdateManyWithoutSkillNestedInput } from '../my-skills/my-skills-unchecked-update-many-without-skill-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class SkillUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    parentId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => SkillUncheckedUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: SkillUncheckedUpdateManyWithoutParentNestedInput;

    @Field(() => MySkillsUncheckedUpdateManyWithoutSkillNestedInput, {nullable:true})
    profiles?: MySkillsUncheckedUpdateManyWithoutSkillNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
