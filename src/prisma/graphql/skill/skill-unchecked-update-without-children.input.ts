import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { UserSkillAcquisitionUncheckedUpdateManyWithoutSkillNestedInput } from '../user-skill-acquisition/user-skill-acquisition-unchecked-update-many-without-skill-nested.input';

@InputType()
export class SkillUncheckedUpdateWithoutChildrenInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    parentId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => UserSkillAcquisitionUncheckedUpdateManyWithoutSkillNestedInput, {nullable:true})
    users?: UserSkillAcquisitionUncheckedUpdateManyWithoutSkillNestedInput;
}
