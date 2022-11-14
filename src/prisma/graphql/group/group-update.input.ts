import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumGroupTypeFieldUpdateOperationsInput } from '../prisma/enum-group-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GroupUpdatephotoUrlsInput } from './group-updatephoto-urls.input';
import { UserUpdateManyWithoutGroupsNestedInput } from '../user/user-update-many-without-groups-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class GroupUpdateInput {

    @Field(() => EnumGroupTypeFieldUpdateOperationsInput, {nullable:true})
    groupType?: EnumGroupTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    emoji?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    imageUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    slackChannel?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GroupUpdatephotoUrlsInput, {nullable:true})
    photoUrls?: GroupUpdatephotoUrlsInput;

    @Field(() => UserUpdateManyWithoutGroupsNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutGroupsNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
