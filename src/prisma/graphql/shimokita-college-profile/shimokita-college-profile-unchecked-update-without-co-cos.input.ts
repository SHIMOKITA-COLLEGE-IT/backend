import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProgramUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../program/program-unchecked-update-many-without-shimokita-college-profiles-nested.input';
import { HouseUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../house/house-unchecked-update-many-without-shimokita-college-profiles-nested.input';
import { HomeUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../home/home-unchecked-update-many-without-shimokita-college-profiles-nested.input';
import { ClubUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../club/club-unchecked-update-many-without-shimokita-college-profiles-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ShimokitaCollegeProfileUncheckedUpdateWithoutCoCosInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    profileId?: IntFieldUpdateOperationsInput;

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

    @Field(() => HomeUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput, {nullable:true})
    homes?: HomeUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput;

    @Field(() => ClubUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput, {nullable:true})
    clubs?: ClubUncheckedUpdateManyWithoutShimokitaCollegeProfilesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
