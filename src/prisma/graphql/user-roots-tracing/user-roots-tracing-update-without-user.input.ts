import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsUpdateOneRequiredWithoutUsersNestedInput } from '../roots/roots-update-one-required-without-users-nested.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserSkillAcquisitionUpdateManyWithoutUserRootsTracingNestedInput } from '../user-skill-acquisition/user-skill-acquisition-update-many-without-user-roots-tracing-nested.input';

@InputType()
export class UserRootsTracingUpdateWithoutUserInput {

    @Field(() => RootsUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    roots?: RootsUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    from?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    to?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserSkillAcquisitionUpdateManyWithoutUserRootsTracingNestedInput, {nullable:true})
    userSkillAcquisitions?: UserSkillAcquisitionUpdateManyWithoutUserRootsTracingNestedInput;
}
