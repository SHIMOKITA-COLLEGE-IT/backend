import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProfileUncheckedUpdateManyWithoutPhotosNestedInput } from '../profile/profile-unchecked-update-many-without-photos-nested.input';
import { HouseUncheckedUpdateManyWithoutPhotosNestedInput } from '../house/house-unchecked-update-many-without-photos-nested.input';
import { CommitteeUncheckedUpdateManyWithoutPhotosNestedInput } from '../committee/committee-unchecked-update-many-without-photos-nested.input';
import { ClubUncheckedUpdateManyWithoutPhotosNestedInput } from '../club/club-unchecked-update-many-without-photos-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class PhotoUncheckedUpdateWithoutHomesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    imageUrl?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    alt?: StringFieldUpdateOperationsInput;

    @Field(() => ProfileUncheckedUpdateManyWithoutPhotosNestedInput, {nullable:true})
    profiles?: ProfileUncheckedUpdateManyWithoutPhotosNestedInput;

    @Field(() => HouseUncheckedUpdateManyWithoutPhotosNestedInput, {nullable:true})
    houses?: HouseUncheckedUpdateManyWithoutPhotosNestedInput;

    @Field(() => CommitteeUncheckedUpdateManyWithoutPhotosNestedInput, {nullable:true})
    committee?: CommitteeUncheckedUpdateManyWithoutPhotosNestedInput;

    @Field(() => ClubUncheckedUpdateManyWithoutPhotosNestedInput, {nullable:true})
    clubs?: ClubUncheckedUpdateManyWithoutPhotosNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
