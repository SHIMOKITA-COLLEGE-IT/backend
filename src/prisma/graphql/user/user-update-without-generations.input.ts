import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SocialLinkUpdateManyWithoutUserNestedInput } from '../social-link/social-link-update-many-without-user-nested.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GroupUpdateManyWithoutUsersNestedInput } from '../group/group-update-many-without-users-nested.input';
import { UserRootsTracingUpdateManyWithoutUserNestedInput } from '../user-roots-tracing/user-roots-tracing-update-many-without-user-nested.input';
import { UserSkillAcquisitionUpdateManyWithoutUserNestedInput } from '../user-skill-acquisition/user-skill-acquisition-update-many-without-user-nested.input';
import { TagUpdateManyWithoutUsersNestedInput } from '../tag/tag-update-many-without-users-nested.input';
import { UserUpdatephotoUrlsInput } from './user-updatephoto-urls.input';

@InputType()
export class UserUpdateWithoutGenerationsInput {

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

    @Field(() => SocialLinkUpdateManyWithoutUserNestedInput, {nullable:true})
    socialLinks?: SocialLinkUpdateManyWithoutUserNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAlumni?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    roomNumber?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    postNumber?: NullableIntFieldUpdateOperationsInput;

    @Field(() => GroupUpdateManyWithoutUsersNestedInput, {nullable:true})
    groups?: GroupUpdateManyWithoutUsersNestedInput;

    @Field(() => UserRootsTracingUpdateManyWithoutUserNestedInput, {nullable:true})
    roots?: UserRootsTracingUpdateManyWithoutUserNestedInput;

    @Field(() => UserSkillAcquisitionUpdateManyWithoutUserNestedInput, {nullable:true})
    skills?: UserSkillAcquisitionUpdateManyWithoutUserNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: StringFieldUpdateOperationsInput;

    @Field(() => TagUpdateManyWithoutUsersNestedInput, {nullable:true})
    tags?: TagUpdateManyWithoutUsersNestedInput;

    @Field(() => UserUpdatephotoUrlsInput, {nullable:true})
    photoUrls?: UserUpdatephotoUrlsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
