import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumGenerationTypeFieldUpdateOperationsInput } from '../prisma/enum-generation-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GenerationUpdatephotoUrlsInput } from './generation-updatephoto-urls.input';
import { UserUpdateManyWithoutGenerationsNestedInput } from '../user/user-update-many-without-generations-nested.input';

@InputType()
export class GenerationUpdateInput {

    @Field(() => EnumGenerationTypeFieldUpdateOperationsInput, {nullable:true})
    generationType?: EnumGenerationTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    from?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    to?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    emoji?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    imageUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    hexColor?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    slackChannel?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GenerationUpdatephotoUrlsInput, {nullable:true})
    photoUrls?: GenerationUpdatephotoUrlsInput;

    @Field(() => UserUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutGenerationsNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
