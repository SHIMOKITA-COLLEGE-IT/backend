import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { SkillUncheckedUpdateManyWithoutParentNestedInput } from './skill-unchecked-update-many-without-parent-nested.input';
import { UserSkillAcquisitionUncheckedUpdateManyWithoutSkillNestedInput } from '../user-skill-acquisition/user-skill-acquisition-unchecked-update-many-without-skill-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class SkillUncheckedUpdateWithoutParentInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => SkillUncheckedUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: SkillUncheckedUpdateManyWithoutParentNestedInput;

    @Field(() => UserSkillAcquisitionUncheckedUpdateManyWithoutSkillNestedInput, {nullable:true})
    users?: UserSkillAcquisitionUncheckedUpdateManyWithoutSkillNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
