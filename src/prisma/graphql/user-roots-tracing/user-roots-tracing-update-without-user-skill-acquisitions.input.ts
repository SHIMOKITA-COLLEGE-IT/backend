import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutRootsNestedInput } from '../user/user-update-one-required-without-roots-nested.input';
import { RootsUpdateOneRequiredWithoutUsersNestedInput } from '../roots/roots-update-one-required-without-users-nested.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';

@InputType()
export class UserRootsTracingUpdateWithoutUserSkillAcquisitionsInput {

    @Field(() => UserUpdateOneRequiredWithoutRootsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutRootsNestedInput;

    @Field(() => RootsUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    roots?: RootsUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    from?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    to?: NullableDateTimeFieldUpdateOperationsInput;
}
