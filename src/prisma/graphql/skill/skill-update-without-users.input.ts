import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { SkillUpdateOneWithoutChildrenNestedInput } from './skill-update-one-without-children-nested.input';
import { SkillUpdateManyWithoutParentNestedInput } from './skill-update-many-without-parent-nested.input';

@InputType()
export class SkillUpdateWithoutUsersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => SkillUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: SkillUpdateOneWithoutChildrenNestedInput;

    @Field(() => SkillUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: SkillUpdateManyWithoutParentNestedInput;
}
