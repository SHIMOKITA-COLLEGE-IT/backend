import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateOneRequiredWithoutShimokitaCollegeProfileNestedInput } from '../profile/profile-update-one-required-without-shimokita-college-profile-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ProgramUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../program/program-update-many-without-shimokita-college-profiles-nested.input';
import { HouseUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../house/house-update-many-without-shimokita-college-profiles-nested.input';
import { HomeUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../home/home-update-many-without-shimokita-college-profiles-nested.input';
import { CommitteeUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../committee/committee-update-many-without-shimokita-college-profiles-nested.input';
import { ClubUpdateManyWithoutShimokitaCollegeProfilesNestedInput } from '../club/club-update-many-without-shimokita-college-profiles-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ShimokitaCollegeProfileUpdateInput {

    @Field(() => ProfileUpdateOneRequiredWithoutShimokitaCollegeProfileNestedInput, {nullable:true})
    profile?: ProfileUpdateOneRequiredWithoutShimokitaCollegeProfileNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAlumni?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slackEmail?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    roomNumber?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    postNumber?: IntFieldUpdateOperationsInput;

    @Field(() => ProgramUpdateManyWithoutShimokitaCollegeProfilesNestedInput, {nullable:true})
    programs?: ProgramUpdateManyWithoutShimokitaCollegeProfilesNestedInput;

    @Field(() => HouseUpdateManyWithoutShimokitaCollegeProfilesNestedInput, {nullable:true})
    houses?: HouseUpdateManyWithoutShimokitaCollegeProfilesNestedInput;

    @Field(() => HomeUpdateManyWithoutShimokitaCollegeProfilesNestedInput, {nullable:true})
    homes?: HomeUpdateManyWithoutShimokitaCollegeProfilesNestedInput;

    @Field(() => CommitteeUpdateManyWithoutShimokitaCollegeProfilesNestedInput, {nullable:true})
    committee?: CommitteeUpdateManyWithoutShimokitaCollegeProfilesNestedInput;

    @Field(() => ClubUpdateManyWithoutShimokitaCollegeProfilesNestedInput, {nullable:true})
    clubs?: ClubUpdateManyWithoutShimokitaCollegeProfilesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
