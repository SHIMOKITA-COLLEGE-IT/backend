import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HouseUncheckedUpdateManyWithoutPhotosNestedInput } from '../house/house-unchecked-update-many-without-photos-nested.input';
import { HomeUncheckedUpdateManyWithoutPhotosNestedInput } from '../home/home-unchecked-update-many-without-photos-nested.input';
import { CommitteeUncheckedUpdateManyWithoutPhotosNestedInput } from '../committee/committee-unchecked-update-many-without-photos-nested.input';
import { ClubUncheckedUpdateManyWithoutPhotosNestedInput } from '../club/club-unchecked-update-many-without-photos-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class PhotoUncheckedUpdateWithoutProfilesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    imageUrl?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    alt?: StringFieldUpdateOperationsInput;

    @Field(() => HouseUncheckedUpdateManyWithoutPhotosNestedInput, {nullable:true})
    houses?: HouseUncheckedUpdateManyWithoutPhotosNestedInput;

    @Field(() => HomeUncheckedUpdateManyWithoutPhotosNestedInput, {nullable:true})
    homes?: HomeUncheckedUpdateManyWithoutPhotosNestedInput;

    @Field(() => CommitteeUncheckedUpdateManyWithoutPhotosNestedInput, {nullable:true})
    committee?: CommitteeUncheckedUpdateManyWithoutPhotosNestedInput;

    @Field(() => ClubUncheckedUpdateManyWithoutPhotosNestedInput, {nullable:true})
    clubs?: ClubUncheckedUpdateManyWithoutPhotosNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
