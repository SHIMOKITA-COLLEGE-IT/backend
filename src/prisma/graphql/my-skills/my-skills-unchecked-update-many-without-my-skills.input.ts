import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';

@InputType()
export class MySkillsUncheckedUpdateManyWithoutMySkillsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    skillId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    myRootsId?: NullableIntFieldUpdateOperationsInput;
}
