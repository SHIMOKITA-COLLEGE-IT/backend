import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class UserSkillAcquisitionUncheckedUpdateWithoutUserRootsTracingInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    skillId?: IntFieldUpdateOperationsInput;
}
