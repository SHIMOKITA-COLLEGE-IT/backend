import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRootsTypeFieldUpdateOperationsInput } from '../prisma/enum-roots-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserRootsTracingUpdateManyWithoutRootsNestedInput } from '../user-roots-tracing/user-roots-tracing-update-many-without-roots-nested.input';

@InputType()
export class RootsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRootsTypeFieldUpdateOperationsInput, {nullable:true})
    rootsType?: EnumRootsTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleMapUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    introductionUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserRootsTracingUpdateManyWithoutRootsNestedInput, {nullable:true})
    users?: UserRootsTracingUpdateManyWithoutRootsNestedInput;
}
