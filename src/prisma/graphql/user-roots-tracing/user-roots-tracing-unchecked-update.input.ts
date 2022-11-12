import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserSkillAcquisitionUncheckedUpdateManyWithoutUserRootsTracingNestedInput } from '../user-skill-acquisition/user-skill-acquisition-unchecked-update-many-without-user-roots-tracing-nested.input';

@InputType()
export class UserRootsTracingUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rootsId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    from?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    to?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserSkillAcquisitionUncheckedUpdateManyWithoutUserRootsTracingNestedInput, {nullable:true})
    userSkillAcquisitions?: UserSkillAcquisitionUncheckedUpdateManyWithoutUserRootsTracingNestedInput;
}
