import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { PhotoUpdateManyWithoutHousesNestedInput } from '../photo/photo-update-many-without-houses-nested.input';
import { ShimokitaCollegeProfileUpdateManyWithoutHousesNestedInput } from '../shimokita-college-profile/shimokita-college-profile-update-many-without-houses-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class HouseUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    from?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    to?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => PhotoUpdateManyWithoutHousesNestedInput, {nullable:true})
    photos?: PhotoUpdateManyWithoutHousesNestedInput;

    @Field(() => ShimokitaCollegeProfileUpdateManyWithoutHousesNestedInput, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileUpdateManyWithoutHousesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}