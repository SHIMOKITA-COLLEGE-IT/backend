import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProfileUpdateManyWithoutPhotosNestedInput } from '../profile/profile-update-many-without-photos-nested.input';
import { HouseUpdateManyWithoutPhotosNestedInput } from '../house/house-update-many-without-photos-nested.input';
import { HomeUpdateManyWithoutPhotosNestedInput } from '../home/home-update-many-without-photos-nested.input';
import { CommitteeUpdateManyWithoutPhotosNestedInput } from '../committee/committee-update-many-without-photos-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class PhotoUpdateWithoutClubsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    imageUrl?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    alt?: StringFieldUpdateOperationsInput;

    @Field(() => ProfileUpdateManyWithoutPhotosNestedInput, {nullable:true})
    profiles?: ProfileUpdateManyWithoutPhotosNestedInput;

    @Field(() => HouseUpdateManyWithoutPhotosNestedInput, {nullable:true})
    houses?: HouseUpdateManyWithoutPhotosNestedInput;

    @Field(() => HomeUpdateManyWithoutPhotosNestedInput, {nullable:true})
    homes?: HomeUpdateManyWithoutPhotosNestedInput;

    @Field(() => CommitteeUpdateManyWithoutPhotosNestedInput, {nullable:true})
    committee?: CommitteeUpdateManyWithoutPhotosNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
