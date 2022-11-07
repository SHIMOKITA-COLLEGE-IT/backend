import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProgramUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../program/program-unchecked-update-many-without-shimokita-college-profiles-nested.input';
import { HouseUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../house/house-unchecked-update-many-without-shimokita-college-profiles-nested.input';
import { CommitteeUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../committee/committee-unchecked-update-many-without-shimokita-college-profiles-nested.input';
import { ClubUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../club/club-unchecked-update-many-without-shimokita-college-profiles-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ShimokitaCollegeProfileUncheckedUpdateWithoutHomesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    profileId?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAlumni?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slackEmail?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    roomNumber?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    postNumber?: IntFieldUpdateOperationsInput;

    @Field(() => ProgramUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput, {nullable:true})
    programs?: ProgramUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput;

    @Field(() => HouseUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput, {nullable:true})
    houses?: HouseUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput;

    @Field(() => CommitteeUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput, {nullable:true})
    committee?: CommitteeUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput;

    @Field(() => ClubUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput, {nullable:true})
    clubs?: ClubUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
