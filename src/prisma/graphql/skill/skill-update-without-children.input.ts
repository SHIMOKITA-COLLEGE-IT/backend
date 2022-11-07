import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { SkillUpdateOneWithoutChildrenNestedInput } from './skill-update-one-without-children-nested.input';
import { MySkillsUpdateManyWithoutSkillNestedInput } from '../my-skills/my-skills-update-many-without-skill-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class SkillUpdateWithoutChildrenInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => SkillUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: SkillUpdateOneWithoutChildrenNestedInput;

    @Field(() => MySkillsUpdateManyWithoutSkillNestedInput, {nullable:true})
    profiles?: MySkillsUpdateManyWithoutSkillNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
