import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateManyWithoutTagsNestedInput } from '../user/user-update-many-without-tags-nested.input';

@InputType()
export class TagUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    iconUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutTagsNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutTagsNestedInput;
}
