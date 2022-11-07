import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateOneRequiredWithoutMyRootsNestedInput } from '../profile/profile-update-one-required-without-my-roots-nested.input';
import { RootsUpdateOneRequiredWithoutMyRootsNestedInput } from '../roots/roots-update-one-required-without-my-roots-nested.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';

@InputType()
export class MyRootsUpdateWithoutProfilesOnSkillsInput {

    @Field(() => ProfileUpdateOneRequiredWithoutMyRootsNestedInput, {nullable:true})
    profile?: ProfileUpdateOneRequiredWithoutMyRootsNestedInput;

    @Field(() => RootsUpdateOneRequiredWithoutMyRootsNestedInput, {nullable:true})
    roots?: RootsUpdateOneRequiredWithoutMyRootsNestedInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    from?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    to?: NullableDateTimeFieldUpdateOperationsInput;
}