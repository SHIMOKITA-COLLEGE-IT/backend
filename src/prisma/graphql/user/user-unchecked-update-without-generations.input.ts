import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SocialLinkUncheckedUpdateManyWithoutUserNestedInput } from '../social-link/social-link-unchecked-update-many-without-user-nested.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GroupUncheckedUpdateManyWithoutUsersNestedInput } from '../group/group-unchecked-update-many-without-users-nested.input';
import { UserRootsTracingUncheckedUpdateManyWithoutUserNestedInput } from '../user-roots-tracing/user-roots-tracing-unchecked-update-many-without-user-nested.input';
import { UserSkillAcquisitionUncheckedUpdateManyWithoutUserNestedInput } from '../user-skill-acquisition/user-skill-acquisition-unchecked-update-many-without-user-nested.input';
import { TagUncheckedUpdateManyWithoutUsersNestedInput } from '../tag/tag-unchecked-update-many-without-users-nested.input';
import { UserUpdatephotoUrlsInput } from './user-updatephoto-urls.input';

@InputType()
export class UserUncheckedUpdateWithoutGenerationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firebaseAuthUid?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    disabled?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    imageUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    nickName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showOnlyNickname?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    birthday?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hideAge?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    position?: StringFieldUpdateOperationsInput;

    @Field(() => SocialLinkUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAlumni?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    roomNumber?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    postNumber?: NullableIntFieldUpdateOperationsInput;

    @Field(() => GroupUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    groups?: GroupUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => UserRootsTracingUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    roots?: UserRootsTracingUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserSkillAcquisitionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    skills?: UserSkillAcquisitionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: StringFieldUpdateOperationsInput;

    @Field(() => TagUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    tags?: TagUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => UserUpdatephotoUrlsInput, {nullable:true})
    photoUrls?: UserUpdatephotoUrlsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
