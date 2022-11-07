import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SocialLinkUpdateManyWithoutProfileNestedInput } from '../social-link/social-link-update-many-without-profile-nested.input';
import { ShimokitaCollegeProfileUpdateOneWithoutProfileNestedInput } from '../shimokita-college-profile/shimokita-college-profile-update-one-without-profile-nested.input';
import { MyRootsUpdateManyWithoutProfileNestedInput } from '../my-roots/my-roots-update-many-without-profile-nested.input';
import { MySkillsUpdateManyWithoutProfileNestedInput } from '../my-skills/my-skills-update-many-without-profile-nested.input';
import { TagUpdateManyWithoutProfilesNestedInput } from '../tag/tag-update-many-without-profiles-nested.input';
import { PhotoUpdateManyWithoutProfilesNestedInput } from '../photo/photo-update-many-without-profiles-nested.input';

@InputType()
export class ProfileUpdateWithoutUserInput {

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

    @Field(() => SocialLinkUpdateManyWithoutProfileNestedInput, {nullable:true})
    socialLinks?: SocialLinkUpdateManyWithoutProfileNestedInput;

    @Field(() => ShimokitaCollegeProfileUpdateOneWithoutProfileNestedInput, {nullable:true})
    shimokitaCollegeProfile?: ShimokitaCollegeProfileUpdateOneWithoutProfileNestedInput;

    @Field(() => MyRootsUpdateManyWithoutProfileNestedInput, {nullable:true})
    myRoots?: MyRootsUpdateManyWithoutProfileNestedInput;

    @Field(() => MySkillsUpdateManyWithoutProfileNestedInput, {nullable:true})
    mySkills?: MySkillsUpdateManyWithoutProfileNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: StringFieldUpdateOperationsInput;

    @Field(() => TagUpdateManyWithoutProfilesNestedInput, {nullable:true})
    tags?: TagUpdateManyWithoutProfilesNestedInput;

    @Field(() => PhotoUpdateManyWithoutProfilesNestedInput, {nullable:true})
    photos?: PhotoUpdateManyWithoutProfilesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
